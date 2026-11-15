# KTBFX — Kettlebell Training Experience

Aplicación móvil de entrenamiento con kettlebell construida con **Expo, React Native y TypeScript**. La versión de la aplicación configurada actualmente es **2.0.0** (`com.ktbfx.app`); la interfaz muestra el nombre del sistema de entrenamiento KTBFX 3.0.

## Funciones disponibles en el código actual

### Biblioteca de ejercicios
- Catálogo de **94 movimientos** organizado por categorías y niveles.
- Búsqueda por nombre del ejercicio o grupo muscular.
- Fichas con instrucciones paso a paso, enfoque muscular, orientación general de carga y notas de seguridad.
- Fotografías de referencia de Wikimedia Commons reutilizadas por familias de movimientos. No son 94 fotografías individuales ni ilustraciones anatómicas específicas.
- Créditos de fotografía y referencias de licencia visibles en las fichas.
- Enlace a búsquedas educativas de YouTube para movimientos básicos e intermedios. Los videos son contenido externo; los movimientos avanzados muestran un aviso para aprenderlos con supervisión cualificada.

### Rutinas y control del entrenamiento
- Rutina personal editable: añadir y quitar movimientos.
- Cronómetro para registrar el tiempo de sesión.
- Temporizador por intervalos con fases automáticas de actividad y descanso.
- Duración configurable de actividad y descanso.
- Controles para iniciar, pausar, reanudar, reiniciar y saltar de fase.
- Conteo de rondas y alertas habladas mediante Expo Speech.
- Control para activar o desactivar las alertas de voz.

### Música
- Pestaña de música con reproductor web integrado para Dogmazic Radio.
- Reproducción en línea: requiere conexión a Internet.
- La música se transmite desde el servicio externo; KTBFX no descarga ni redistribuye las canciones. Las licencias dependen de cada artista y de cada obra.

### Perfil y datos locales
- Perfil local de demostración.
- Favoritos, rutina e historial de sesiones guardados con AsyncStorage.
- Navegación inferior vertical en el lateral derecho.
- Botón físico de retroceso de Android: cierra primero la ficha abierta y, después, vuelve a Inicio desde otras secciones.

### Sistema de logros (paquete independiente)
El repositorio también contiene `packages/ktbfx-achievements`, un paquete para Expo/React Native con medallas, niveles, XP, misiones semanales y almacenamiento local. Consulta su [guía de instalación](packages/ktbfx-achievements/README.md). Este módulo requiere integrarse explícitamente con los eventos y pantallas de la aplicación principal; no debe asumirse que el perfil local de demostración ya sincroniza estos datos.

## Estado y limitaciones conocidas

- El perfil actual es local y de demostración. No implementa autenticación real, verificación de correo ni recuperación segura de contraseña.
- Los datos de AsyncStorage permanecen en el dispositivo; no existe sincronización en la nube ni recuperación automática en otro teléfono.
- Las fotografías son referencias por categoría y pueden repetirse entre movimientos.
- Los videos se abren como resultados externos de YouTube; KTBFX no aloja ni controla esos videos.
- La radio requiere Internet y depende del reproductor y servicio externos.
- La interfaz y el temporizador no sustituyen la orientación de un entrenador. Empieza con movimientos que puedas controlar, usa cargas ligeras o practica sin peso y detente si aparece dolor o mareo.

## Tecnologías

- Expo SDK 54
- React 19.1
- React Native 0.81.4
- TypeScript 5.9
- AsyncStorage 2.2
- React Native WebView 13.15
- Expo Speech 14

## Ejecutar localmente

Requisitos: Node.js 22 recomendado y npm.

```bash
npm install
npx expo config --json
npx expo start
```

Para abrir en Android con Expo:

```bash
npx expo start --android
```

## Compilación Android

### GitHub Actions
El workflow `.github/workflows/build.yml` permite iniciar manualmente una compilación o ejecutarla al cambiar archivos de la app. Valida la configuración Expo, genera el proyecto Android nativo y construye un **APK debug** con Gradle. El APK se publica como artefacto de GitHub Actions durante 14 días.

1. Abre la pestaña **Actions** del repositorio.
2. Selecciona **Build KTBFX Android APK**.
3. Ejecuta **Run workflow** en la rama `main`.
4. Espera a que todos los pasos terminen correctamente.
5. Descarga `KTBFX-Android-APK` desde los artefactos de la ejecución.

La existencia del workflow no significa que una compilación haya terminado correctamente; revisa el resultado de cada ejecución.

### Expo EAS
El archivo `eas.json` define:
- `development`: cliente de desarrollo interno.
- `preview`: APK de distribución interna.
- `production`: Android App Bundle (AAB), destinado al flujo de publicación.

Comandos:

```bash
eas build --platform android --profile preview
eas build --platform android --profile production
```

La compilación de producción genera el formato AAB configurado para Google Play. La publicación en Google Play es un paso separado.

## Identificadores de la aplicación

- Expo slug: `ktbfx`
- Android applicationId: `com.ktbfx.app`
- iOS bundle identifier: `com.ktbfx.app`
- Versión Expo configurada: `2.0.0`
- Android versionCode configurado: `2`

## Estructura destacada

- `App.tsx`: interfaz principal, catálogo, rutinas, temporizador, música y almacenamiento local.
- `app.json`: configuración Expo e identificadores.
- `eas.json`: perfiles de compilación EAS.
- `.github/workflows/build.yml`: workflow de compilación APK Android.
- `packages/ktbfx-achievements/`: módulo independiente de logros, niveles y misiones.
- `KTBFX_2_0_NOTAS.md`: notas funcionales y limitaciones.
- `CHANGELOG.md`: historial de actualizaciones.

## Seguridad y privacidad

No publiques tokens de Expo, credenciales de GitHub, claves privadas ni contraseñas. No uses una contraseña reutilizada en el perfil local de demostración. Antes de añadir cuentas reales o sincronización, configura un backend con autenticación segura y reglas de acceso por usuario.
