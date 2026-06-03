# Opti-CDS cold email — Worker + Dashboard

Worker Cloudflare avec :
- **Dashboard web** : liste tous les CDS avec profil/spécialité/email, éditeur de draft, workflow `draft → validated → sent`
- **Envoi automatique** via Resend, cron lun-ven 9h UTC, 30 mails/jour configurable
- **Séquence** : J0 (custom draft) → J+4 / J+9 (templatés, threadés dans le même fil Gmail)
- **DB** : Cloudflare D1 (SQLite serverless, gratuit jusqu'à 5 GB)
- **Compliance** : List-Unsubscribe header + lien `/u/:id.:sig` signé HMAC
- **Auth admin** : Basic Auth (password = `WEBHOOK_SECRET`)

## Workflow

1. Tu importes les CDS scrapés (`scripts/import.mjs`) → chacun arrive avec un draft auto-généré
2. Tu te connectes au dashboard, parcours les contacts, édites les drafts si besoin
3. Tu cliques **"✅ Valider"** sur ceux que tu veux envoyer → ils rejoignent la file
4. Le cron pioche 30/jour dans la file et envoie via Resend
5. Les relances J+4 / J+9 partent automatiquement sur les mêmes threads
6. Les réponses arrivent dans `sacha@opti-cds.fr`, les unsub/bounces sont gérés via webhook Resend

---

## 1. Prérequis (15 min)

### a. Compte Resend
1. Crée un compte sur https://resend.com (gratuit : 3000 mails/mois, suffisant pour ta V1)
2. Va dans **Domains** → Add Domain → `opti-cds.fr`
3. Resend te donne 4 enregistrements DNS à ajouter chez OVH :
   - `_amazonses` TXT (vérification)
   - `resend._domainkey` TXT (DKIM 1)
   - `resend2._domainkey` TXT (DKIM 2)
   - MX `feedback-smtp` (return-path)
4. Ajoute-les dans la zone DNS OVH d'opti-cds.fr
5. Attends "Verified" sur Resend (5-30 min)
6. Génère une **API Key** : Settings → API Keys → "Full Access" → copie la clé

### b. Compte Cloudflare (déjà fait — c'est le même que pour le site)

---

## 2. Déploiement (10 min)

```bash
cd worker-cold-email
npm install

# crée la base D1
npx wrangler d1 create optids-cold
# → copie l'ID retourné dans wrangler.toml (database_id = "...")

# applique le schéma
npm run db:init

# génère un secret random pour signer les liens d'unsubscribe + auth des webhooks
WEBHOOK_SECRET=$(openssl rand -hex 24)
UNSUBSCRIBE_SALT=$(openssl rand -hex 24)
echo "WEBHOOK_SECRET=$WEBHOOK_SECRET"   # garde-le
echo "UNSUBSCRIBE_SALT=$UNSUBSCRIBE_SALT"

# pose les secrets sur le Worker
npx wrangler secret put RESEND_API_KEY      # colle ta clé Resend
npx wrangler secret put WEBHOOK_SECRET      # colle la valeur ci-dessus
npx wrangler secret put UNSUBSCRIBE_SALT    # colle la valeur ci-dessus

# déploie
npm run deploy
```

Le Worker est dispo sur `https://opti-cds-cold-email.<ton-subdomain>.workers.dev`.

### Custom domain (optionnel mais propre)

Dans Cloudflare Dashboard → Workers → opti-cds-cold-email → Triggers → Custom Domains → `cold.opti-cds.fr`. Le CNAME se crée tout seul. Met à jour `BASE_URL` dans `wrangler.toml` puis redeploy.

---

## 3. Webhooks Resend (5 min)

Pour qu'on track bounces/complaints/désinscriptions :

1. Sur Resend → **Webhooks** → Add Endpoint
2. URL : `https://cold.opti-cds.fr/webhook/resend` (ou l'URL workers.dev)
3. Events : `email.bounced`, `email.complained`, `email.delivered`, `email.opened`
4. Ajoute le header custom : `x-webhook-secret: <WEBHOOK_SECRET>`

---

## 4. Importer la liste (2 min)

```bash
WORKER_URL=https://cold.opti-cds.fr \
WEBHOOK_SECRET=<ton secret> \
node scripts/import.mjs ../../tmp/finess/campagne_optids_v1.csv
```

Réponse attendue :
```
280 lignes à pousser vers https://cold.opti-cds.fr/import
  batch 200/280 -> +200 new, 0 skipped
  batch 280/280 -> +80 new, 0 skipped
Done. Inserted: 280 | Skipped (déjà présents): 0
```

---

## 5. Tests avant de lancer

### Test "DRY RUN" (n'envoie rien, log seulement)

```bash
# édite wrangler.toml -> DRY_RUN = "true"
npm run deploy

# trigger manuel
curl -X POST -H "x-auth: $WEBHOOK_SECRET" https://cold.opti-cds.fr/run
# -> {"sent":30,"errors":0,"breakdown":{"j0":30,"j4":0,"j9":0}}

# regarde les logs
npx wrangler tail
```

### Vrai test : envoie 3 mails à toi-même

```bash
# repasse DRY_RUN = "false"
# pose un contact-test
curl -X POST -H "x-auth: $WEBHOOK_SECRET" -H "Content-Type: application/json" \
  https://cold.opti-cds.fr/import \
  -d '[{"email":"sachabitoun17@gmail.com","first_name":"Sacha","nom_cds":"TEST CDS","segment":"A_premium"}]'

# trigger
curl -X POST -H "x-auth: $WEBHOOK_SECRET" https://cold.opti-cds.fr/run
```

Tu dois recevoir le J0 dans ta boîte. Vérifie :
- ✅ pas en spam (sinon : SPF/DKIM mal configurés)
- ✅ lien de désinscription cliquable
- ✅ le clic ouvre la page "Vous êtes désinscrit"

---

## 6. Production : laisser tourner

Le cron tourne automatiquement lun-ven à 9h UTC. Tu n'as rien à faire.

### Surveillance quotidienne (1 min)

```bash
curl https://cold.opti-cds.fr/
```

Renvoie :
```json
{
  "contacts": [
    { "status": "pending",      "n": 50 },
    { "status": "sending",      "n": 180 },
    { "status": "done",         "n": 45 },
    { "status": "unsubscribed", "n": 3 },
    { "status": "bounced",      "n": 2 }
  ],
  "sent_24h": 30,
  "sent_7d_by_step": [
    { "step": 1, "n": 150 },
    { "step": 2, "n": 80  },
    { "step": 3, "n": 30  }
  ]
}
```

### Logs en temps réel

```bash
npm run tail
```

### Pause / reprise

```bash
# pause
npx wrangler deploy --triggers ""

# reprise
npx wrangler deploy
```

---

## 7. Quand quelqu'un répond

Les réponses arrivent dans **ta vraie boîte** `sacha@opti-cds.fr` (Reply-To). Tu réponds depuis Gmail/Outlook normalement — le Worker n'envoie plus rien sur ce contact (il est passé à `step=3 status='done'` ou marqué `replied` si tu fais un PATCH manuel).

Pour marquer un contact comme "a répondu" et stopper toute future relance :
```bash
npx wrangler d1 execute optids-cold --remote --command \
  "UPDATE contacts SET status='replied' WHERE email='xxx@yyy.fr'"
```

---

## Architecture

```
┌──────────────┐   cron 9h UTC   ┌─────────────────┐
│ CF Scheduler │ ──────────────► │  Worker /run    │
└──────────────┘                 │                 │
                                 │  pickContacts() │
                                 │  buildMail()    │
                                 │  resend.send()  │
                                 │  update DB      │
                                 └───┬─────────────┘
                                     │
                          ┌──────────┴──────────┐
                          │                     │
                          ▼                     ▼
                   ┌──────────────┐      ┌────────────┐
                   │  D1 SQLite   │      │   Resend   │
                   │  contacts    │      │ /v1/emails │
                   │  sends       │      └──────┬─────┘
                   │  events      │             │
                   └──────────────┘             ▼
                          ▲                ┌─────────┐
                          │                │ INBOX   │
                          │  webhook       │ prospect│
                          └────────────────┴─────────┘
```
