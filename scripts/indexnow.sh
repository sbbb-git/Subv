#!/usr/bin/env bash
# Soumet toutes les URLs du sitemap à IndexNow (Bing, Yandex, Seznam, Naver).
# À lancer après chaque déploiement qui ajoute / modifie des pages.
#
# Usage : bash scripts/indexnow.sh
set -euo pipefail

KEY="88a625b88f3f4c718a8b60b8ac87a5ea"
HOST="opti-cds.fr"
SITEMAP="https://${HOST}/sitemap.xml"

echo "Récupération des URLs depuis ${SITEMAP}..."
URLS=$(curl -s "$SITEMAP" | grep -oP '<loc>\K[^<]+')
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
