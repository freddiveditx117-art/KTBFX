# KTBFX — notas de la versión actual

## Funciones de la aplicación principal

- Biblioteca de 94 movimientos con categorías, niveles y búsqueda.
- Guías paso a paso, enfoque muscular, orientación general de carga y notas de seguridad.
- Fotografías de referencia reutilizadas por familias de movimientos, con créditos de autor/licencia. No son 94 imágenes individuales.
- Acceso a búsquedas de videos educativos en YouTube para movimientos básicos e intermedios. El contenido es externo; los movimientos avanzados muestran un aviso para aprender con supervisión cualificada.
- Rutina editable, favoritos e historial de sesiones.
- Cronómetro y temporizador de intervalos con actividad y descanso configurables.
- Iniciar, pausar, reanudar, reiniciar y saltar de fase; conteo de rondas y alertas habladas.
- Pestaña de música con Dogmazic Radio mediante WebView. Requiere conexión y las licencias dependen de cada artista.
- Navegación lateral vertical y soporte para el botón físico Atrás de Android.
- Persistencia local mediante AsyncStorage.

## Módulo de logros

El paquete `packages/ktbfx-achievements` ofrece medallas, XP, niveles y misiones semanales como módulo independiente. Debe conectarse explícitamente a los eventos reales de la aplicación principal.

## Limitaciones

- El perfil es una demostración local; no verifica correo ni implementa autenticación segura.
- Los datos no se sincronizan con la nube ni se recuperan automáticamente en otro dispositivo.
- Las fotos son referencias de categoría y pueden repetirse.
- Los videos y la radio dependen de servicios externos y conexión a Internet.
- El archivo de configuración Expo indica versión 2.0.0 y Android versionCode 2; la etiqueta visual KTBFX 3.0 en la pantalla principal no cambia esos identificadores.

## Compilar Android

El workflow `.github/workflows/build.yml` valida Expo, ejecuta prebuild y compila un APK debug con Gradle. Para ejecutarlo: GitHub → Actions → Build KTBFX Android APK → Run workflow. Descarga el artefacto cuando todos los pasos estén correctos.

EAS mantiene dos perfiles útiles:
- `preview`: APK para distribución interna.
- `production`: AAB para el proceso de Google Play.

Una configuración correcta no garantiza una compilación exitosa. Comprueba siempre el estado de GitHub Actions o Expo EAS. No publiques `EXPO_TOKEN` ni otros secretos.
