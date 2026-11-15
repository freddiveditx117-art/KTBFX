# KTBFX — comunicado de actualización

## Nueva actualización de KTBFX

KTBFX continúa evolucionando con una biblioteca de 94 movimientos de kettlebell y herramientas para organizar y controlar los entrenamientos.

### Novedades incluidas
- Biblioteca de 94 movimientos, con categorías, niveles, búsqueda y fichas de instrucciones.
- Referencias visuales con créditos de sus autores y enlaces a videos educativos externos.
- Rutinas personales, favoritos e historial guardados en el dispositivo.
- Cronómetro y temporizador de intervalos con actividad y descanso configurables.
- Controles de iniciar, pausar, reanudar, reiniciar y saltar de fase.
- Conteo de rondas y alertas habladas.
- Reproductor de radio en línea mediante servicio externo.
- Navegación adaptada y compatibilidad con el botón físico Atrás de Android.
- Paquete independiente de logros, medallas, XP y misiones semanales.

### APK Android actualizado

**Estado: pendiente de compilación y verificación.**

El repositorio contiene el flujo de GitHub Actions que genera el APK instalable de Android. Todavía no hay un archivo APK nuevo verificado adjunto a este comunicado. No se debe presentar un enlace de descarga como disponible hasta que la compilación termine correctamente.

1. Abre [GitHub Actions — KTBFX](https://github.com/freddiveditx117-art/KTBFX/actions/workflows/build.yml).
2. Selecciona **Build KTBFX Android APK**.
3. Pulsa **Run workflow** y confirma la rama `main`.
4. Espera a que la ejecución termine con estado **Success**.
5. Abre esa ejecución y descarga el artefacto **KTBFX-Android-APK**.

El artefacto de Actions contiene el APK debug y se conserva durante 14 días. Si la compilación falla, consulta los registros de la ejecución y corrige el error antes de distribuir la aplicación.

### Avisos importantes
- El perfil de usuario y los datos actuales son locales; no existe autenticación real ni sincronización en la nube.
- Las demostraciones de video y la radio dependen de servicios externos y conexión a Internet.
- Las imágenes son referencias visuales y pueden repetirse entre movimientos.
- El paquete de logros está disponible por separado y requiere integración explícita con la app principal.

**Repositorio oficial:** https://github.com/freddiveditx117-art/KTBFX  
**Código fuente:** https://github.com/freddiveditx117-art/KTBFX  
**Compilaciones y APK:** https://github.com/freddiveditx117-art/KTBFX/actions/workflows/build.yml
