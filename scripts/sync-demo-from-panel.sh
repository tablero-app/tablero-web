#!/usr/bin/env bash
# sync-demo-from-panel.sh
#
# Sincroniza el modo demo del panel real (eric-crypto-ai/grupo-imar-frontend)
# a public/demo/ de este repo. Esto sirve el panel demo bajo
# https://www.intralogik.com/demo/ con URL canónica del producto.
#
# Por qué un copy en lugar de un Vercel rewrite:
#   El panel usa rutas relativas para sus assets (styles.css, app.js, etc.).
#   Cuando se rewriteaba a github.io, el preload scanner del navegador
#   pre-fetch los <link> y <script> antes de poder ejecutar cualquier
#   inyección de <base>, así que los assets resolvían a la raíz (404). Un
#   <base href="/demo/"> ESTÁTICO en el HTML evita ese race.
#
# Qué se modifica respecto al panel real:
#   - <script> que inyectaba <base> dinámico → reemplazado por
#     <base href="/demo/"> estático (preload-scanner-safe).
#   - Nada más. Los demás archivos se copian tal cual.
#
# Uso (desde la raíz de tablero-web):
#   bash scripts/sync-demo-from-panel.sh [/ruta/al/panel/grupo-imar-frontend]
#
# Si no se pasa ruta, se asume ../grupo-imar-frontend (vecino del repo).

set -euo pipefail

PANEL_REPO="${1:-../grupo-imar-frontend}"
PANEL_DIR="$PANEL_REPO/panel"
DEST_DIR="public/demo"

if [ ! -d "$PANEL_DIR" ]; then
  echo "✗ No encuentro el panel en: $PANEL_DIR" >&2
  echo "  Pasa la ruta al repo grupo-imar-frontend como argumento." >&2
  exit 1
fi

mkdir -p "$DEST_DIR"

# Archivos a copiar tal cual.
for f in styles.css config.js app.js demo-data.js demo-mode.js; do
  cp "$PANEL_DIR/$f" "$DEST_DIR/$f"
  echo "✓ $f"
done

# index.html: copia + reemplazo del <base> dinámico por uno estático.
# El bloque dinámico ocupa desde el comentario "<base> dinámico" hasta
# el cierre del <script>. Lo reconocemos por el patrón "var b = document.createElement('base')".
python3 - <<'PY'
import re, pathlib
src = pathlib.Path("../grupo-imar-frontend/panel/index.html")
import sys, os
panel_dir = os.environ.get("PANEL_DIR_RESOLVED", "../grupo-imar-frontend/panel")
src = pathlib.Path(panel_dir) / "index.html"
html = src.read_text(encoding="utf-8")

# Reemplaza el bloque <!-- comentario --> + <script> con la inyección dinámica.
# El bloque empieza con "<!--" justo antes del <script> que crea el <base> y
# termina al cerrar </script>.
pattern = re.compile(
    r"<!--\s*\n?\s*<base>\s*dinámico.*?</script>",
    re.DOTALL,
)
replacement = (
    '<!-- <base> estático: assets relativos resuelven a /demo/styles.css, '
    '/demo/app.js, etc.\n'
    '       Sincronizado vía scripts/sync-demo-from-panel.sh — no editar a mano. -->\n'
    '  <base href="/demo/">'
)
new_html, count = pattern.subn(replacement, html, count=1)
if count == 0:
    sys.exit("✗ No encontré el bloque <base> dinámico en index.html — ¿cambió el patrón?")

dest = pathlib.Path("public/demo/index.html")
dest.write_text(new_html, encoding="utf-8")
print(f"✓ index.html (con <base href='/demo/'> estático)")
PY

echo ""
echo "Sincronización completada. Revisa con git diff y commitea."
