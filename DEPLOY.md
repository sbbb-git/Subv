# Déploiement Cloudflare Pages

Le site est configuré en **static export** Next.js. Build = fichiers HTML/CSS/JS statiques dans `out/`. Cloudflare Pages les sert tels quels, ultra rapide, gratuit illimité.

## Premier déploiement

1. **dash.cloudflare.com** → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. Sélectionner le repo `sachabitoun17-ctrl/Subv`
3. Choisir la branche `claude/healthcare-consulting-site-4rxIZ` (ou `main` plus tard)
4. **Build settings :**
   - Framework preset : **None** (important — ne PAS choisir Next.js, qui force le mode SSR)
   - Build command : `npm run build`
   - Build output directory : **`out`**
   - Root directory : (laisser vide)
   - Node version (Environment variables) : `NODE_VERSION` = `20`
5. **Save and Deploy**

Le premier build prend ~2 min. À la fin Cloudflare donne une URL `*.pages.dev`.

## Modifs futures

Une fois la connexion Git faite, tout est automatique :

```bash
# modif locale
git add -A
git commit -m "ma modif"
git push
```

→ Cloudflare détecte le push, rebuild, redéploie tout seul.

## Domaine custom (subventionscds.fr)

Cloudflare Pages → onglet **Custom domains** → **Set up a custom domain** → coller le domaine → suivre les instructions DNS. HTTPS automatique.

## Diagnostic des problèmes courants

| Symptôme | Cause probable | Solution |
|---|---|---|
| Page blanche | Output directory pas configuré sur `out` | Settings → Build → Output directory = `out` → Retry deployment |
| 404 sur la home | Framework preset = Next.js (mode SSR) | Settings → Build → Framework preset = **None** → Retry deployment |
| Build qui plante | Node trop vieux | Environment variables → ajouter `NODE_VERSION` = `20` |
| Liens cassés après navigation | Trailing slash | Déjà géré dans `next.config.mjs` (trailingSlash: false) |

## Vérifier que le build local fonctionne

```bash
npm run build
npx http-server out -p 8080
# puis ouvrir http://localhost:8080
```
