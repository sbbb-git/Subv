#!/usr/bin/env bash
# Soumet des URLs à IndexNow (Bing, Yandex, Seznam, Naver).
# À lancer après un déploiement qui ajoute ou modifie des pages.
#
# Usage :
#   bash scripts/indexnow.sh              soumet toutes les URLs du sitemap
#   bash scripts/indexnow.sh <fichier>    soumet uniquement les URLs listées
#
# Le second usage évite de resignaler quotidiennement l'intégralité du site :
# le déploiement planifié ne transmet que ce qui vient réellement d'apparaître.
set -euo pipefail

KEY="8e34269a671a49aca7d02e799e3645fa"
HOST="opti-cds.fr"
SITEMAP="https://${HOST}/sitemap.xml"

LISTE="${1:-}"
if [ -n "$LISTE" ]; then
  echo "Lecture des URLs depuis ${LISTE}..."
  URLS=$(grep -v '^[[:space:]]*$' "$LISTE" || true)
  if [ -z "$URLS" ]; then
    echo "  aucune URL nouvelle, rien à soumettre."
    exit 0
  fi
else
  echo "Récupération des URLs depuis ${SITEMAP}..."
  URLS=$(curl -s "$SITEMAP" | grep -oP '<loc>\K[^<]+')
fi
COUNT=$(echo "$URLS" | grep -c . || true)
echo "  ${COUNT} URLs trouvées"

# Construit le payload JSON
PAYLOAD=$(python3 - "$KEY" "$HOST" <<'PY'
import json, sys
key, host = sys.argv[1], sys.argv[2]
urls = [l.strip() for l in sys.stdin if l.strip()]
print(json.dumps({
    "host": host,
    "key": key,
    "keyLocation": f"https://{host}/{key}.txt",
    "urlList": urls,
}))
PY
<<<"$URLS")

echo "Soumission à IndexNow..."
HTTP=$(curl -s -o /dev/null -w "%{http_code}" -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" -d "$PAYLOAD")
echo "  api.indexnow.org → HTTP ${HTTP}"

HTTP_BING=$(curl -s -o /dev/null -w "%{http_code}" -X POST "https://www.bing.com/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" -d "$PAYLOAD")
echo "  bing.com/indexnow → HTTP ${HTTP_BING}"

echo "Fait. (202 = accepté)"
