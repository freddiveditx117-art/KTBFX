# KTBFX 3.0 — Biblioteca visual de movimientos

## Cambios aplicados
- La biblioteca conserva los 94 movimientos existentes.
- Se eliminó la dependencia de ocho archivos PNG que no estaban presentes en `assets/moves` y que podían provocar un error al iniciar Expo.
- Se incorporó una ficha visual nativa de reserva para cada movimiento, con estilo oscuro y acento rojo KTBFX.
- Las fichas aparecen en Inicio, Biblioteca, detalle del ejercicio y Mi rutina.
- La vista compacta evita que la ilustración desborde las filas de la rutina.

## Importante
Esta actualización añade una identidad visual provisional creada con componentes de React Native. **Todavía no contiene 94 ilustraciones anatómicas realistas individuales.** Esas imágenes deben producirse como archivos de imagen y añadirse a `assets/moves`; no se deben declarar rutas `require()` hasta que los archivos existan en el repositorio.

## Comprobación pendiente
Después de sincronizar el repositorio, ejecutar:
```bash
npx expo start
```
y comprobar Inicio, Biblioteca, detalle de movimiento y Mi rutina en Android.
