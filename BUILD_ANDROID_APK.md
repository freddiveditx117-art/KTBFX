# Generar el APK Android actualizado de KTBFX

El repositorio incluye un workflow de GitHub Actions que genera un APK debug instalable.

## Pasos desde GitHub

1. Abre [GitHub Actions — Build KTBFX Android APK](https://github.com/freddiveditx117-art/KTBFX/actions/workflows/build.yml).
2. Selecciona el workflow **Build KTBFX Android APK**.
3. Pulsa **Run workflow** y selecciona la rama `main`.
4. Espera a que termine la ejecución.
5. Si el resultado es **Success**, abre la ejecución.
6. En **Artifacts**, descarga **KTBFX-Android-APK**.
7. Extrae el ZIP para obtener `app-debug.apk`.

## Qué hace el workflow

- Configura Node.js 22 y Java 17.
- Instala las dependencias de npm.
- Valida la configuración con `npx expo config --json`.
- Genera el proyecto nativo con `npx expo prebuild --platform android --clean --no-install`.
- Compila con Gradle mediante `./gradlew :app:assembleDebug`.
- Publica el archivo APK como artefacto de GitHub Actions durante 14 días.

## Importante

- El APK solo estará disponible después de una ejecución exitosa.
- Si el workflow falla, abre los registros y corrige el primer paso fallido.
- Este workflow genera un APK **debug** para pruebas e instalación interna; no genera un AAB de producción para Google Play.
- No confundas el ZIP del proyecto Android con un APK instalable.
- No publiques tokens, contraseñas ni claves privadas.

## Compilación EAS para Google Play

El perfil `production` de `eas.json` está destinado a generar un Android App Bundle (AAB). Ejecuta:

```bash
eas build --platform android --profile production
```

Cuando EAS finalice correctamente, descarga el AAB desde el panel de Expo. La carga en Google Play es un paso separado.
