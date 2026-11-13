# Cómo actualizar KTBFX desde GitHub usando Android

1. Descarga y extrae este ZIP en tu teléfono.
2. Abre tu repositorio privado KTBFX en GitHub.
3. Para cada archivo de esta carpeta, abre el archivo del mismo nombre en GitHub y reemplaza su contenido con el archivo nuevo. Para las imágenes, crea la carpeta `assets/moves` y sube los ocho PNG con sus mismos nombres.
4. Actualiza `App.tsx`, `app.json` y `README.md`. Conserva tu `.github/workflows/build.yml` que ya te funciona; no lo reemplaces por el archivo de este ZIP.
5. En GitHub, abre Actions y ejecuta el flujo que genera el APK.
6. Cuando EAS marque la compilación como `Finished`, descarga el APK desde Expo.

Archivos principales que debes actualizar:
- `App.tsx`
- `app.json`
- `assets/moves/goblet-squat.png`
- `assets/moves/deadlift.png`
- `assets/moves/strict-press.png`
- `assets/moves/one-arm-row.png`
- `assets/moves/farmer-carry.png`
- `assets/moves/reverse-lunge.png`
- `assets/moves/swing.png`
- `assets/moves/halo.png`

No publiques ni compartas tu `EXPO_TOKEN`.
