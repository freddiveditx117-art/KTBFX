# Cómo generar el APK de KTBFX

Este proyecto está configurado para generar un APK Android con Expo Application Services (EAS).

## Requisitos
- Una computadora con Node.js LTS.
- Una cuenta de Expo: https://expo.dev/signup
- Conexión a Internet.

## Pasos
1. Descomprime el proyecto.
2. Abre una terminal dentro de la carpeta `KTBFX`.
3. Ejecuta `npm install`.
4. Instala EAS CLI: `npm install -g eas-cli`.
5. Inicia sesión: `eas login`.
6. Configura el proyecto: `eas build:configure`.
7. Solicita el APK: `eas build --platform android --profile preview`.
8. Cuando el servicio termine la compilación, abre el enlace que proporciona Expo y descarga el APK.

La compilación se realiza en los servidores de Expo. El APK no está incluido todavía en este archivo ZIP.

## Nota
La versión actual es un prototipo inicial. Los botones de Google y Apple son marcadores visuales y no autentican todavía; el generador de rutinas es una demostración local. Antes de distribuir la aplicación, completa y prueba autenticación, contenido multimedia, almacenamiento y revisión técnica de los ejercicios.
