# Historial de cambios — KTBFX

## 2026-11-15 — Actualización de funciones y documentación

### Entrenamiento
- Catálogo de 94 movimientos con filtros, categorías y niveles.
- Guías paso a paso, indicaciones de carga y notas de seguridad.
- Fotos de referencia por categoría con créditos de autor y licencia.
- Acceso a búsquedas educativas externas de YouTube para movimientos básicos e intermedios.
- Rutinas editables y guardado local de favoritos e historial.
- Cronómetro y temporizador de intervalos con actividad/descanso configurable.
- Pausa, reanudación, reinicio, salto de fase, conteo de rondas y alertas habladas.
- Navegación lateral vertical y soporte para el botón físico Atrás de Android.

### Música
- Nueva pestaña de música con Dogmazic Radio integrada mediante WebView.
- Reproducción en línea y enlace para abrir el servicio externo.

### Compilación y repositorio
- Workflow de GitHub Actions para validar Expo, generar Android y producir un APK debug como artefacto.
- Configuración EAS con perfil preview APK y perfil production AAB.
- Documentación principal actualizada para describir funciones, compilación y limitaciones reales.

### Aclaraciones
- Las fotos se reutilizan como referencias de familias de movimientos; no hay una imagen distinta por cada uno de los 94 ejercicios.
- Los videos son resultados externos de YouTube, no archivos alojados por KTBFX.
- El perfil, los favoritos, la rutina y el historial son locales; no hay autenticación real ni sincronización en la nube.
- El paquete de logros está disponible por separado y requiere integración explícita con la app principal.
- La compilación y publicación deben verificarse en GitHub Actions / Expo; la configuración por sí sola no confirma que el APK o AAB se haya generado.
