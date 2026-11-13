# KTBFX 2.0 — actualización de la aplicación

## Incluido en esta entrega
- Catálogo inicial de 94 movimientos con categorías, niveles y búsqueda.
- Fichas con pasos y notas de seguridad. Las ilustraciones actuales son representativas de cada categoría; no son una imagen anatómica única de cada movimiento.
- Acceso a búsquedas de videos demostrativos en YouTube. Los videos no están alojados dentro de la app.
- Rutina editable, temporizador de sesión y referencia de descanso.
- Favoritos, perfil local e historial guardados en el dispositivo mediante AsyncStorage.
- Interfaz oscura en negro, rojo y blanco, con cinco pestañas.

## Limitaciones importantes
Esta entrega es una versión local/prototipo. El registro no verifica correos ni ofrece autenticación segura; el progreso no se sincroniza en la nube ni se recupera en otro teléfono. Para ello hay que configurar Supabase o Firebase con credenciales del propietario. No introduzcas contraseñas reutilizadas.

Las ilustraciones existentes se reutilizan como imágenes representativas de sus categorías. Las demostraciones enlazan a búsquedas de YouTube y requieren conexión a Internet.

## Compilar
1. Sustituye el contenido del repositorio por los archivos de este ZIP, conservando `.github/workflows/build.yml`.
2. Ejecuta `npm install` (instalará AsyncStorage).
3. Inicia el workflow de GitHub Actions para generar el APK con EAS.

No se ha generado ni probado un APK en este entorno.
