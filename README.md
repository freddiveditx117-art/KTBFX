# KTBFX 2.0 — Achievements & Rewards

Módulo de logros, medallas, XP, niveles y misiones para una aplicación Expo / React Native.

## Contenido

- `src/achievements/achievementsData.js`: 18 logros, niveles y misiones de ejemplo.
- `src/achievements/achievementsEngine.js`: cálculo de XP y desbloqueo único de medallas.
- `src/achievements/achievementsStorage.js`: persistencia local con AsyncStorage.
- `src/achievements/AchievementsProvider.jsx`: estado global y acciones para la app.
- `src/components/`: tarjetas, insignias, barra XP y animación de desbloqueo.
- `src/screens/`: pantallas de logros, medallas y misiones.
- `src/examples/IntegrationExample.jsx`: ejemplo de integración.

## 1. Instalar dependencia

Desde la raíz de tu proyecto Expo:

```bash
npx expo install @react-native-async-storage/async-storage
```

## 2. Copiar los archivos

Copia la carpeta `src` de este paquete dentro de la raíz de tu proyecto. Si ya tienes una carpeta `src`, combina las carpetas sin borrar tus archivos existentes.

## 3. Envolver la aplicación con el proveedor

En tu `App.js` o en el componente raíz:

```jsx
import React from "react";
import { AchievementsProvider } from "./src/achievements/AchievementsProvider";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <AchievementsProvider>
      <AppNavigator />
    </AchievementsProvider>
  );
}
```

Si tu aplicación no usa `AppNavigator`, conserva tu componente raíz actual dentro de `AchievementsProvider`.

## 4. Registrar actividades desde tus entrenamientos

Importa el hook en la pantalla o componente donde termina una actividad:

```jsx
import { useAchievements } from "../achievements/AchievementsProvider";

const { recordActivity } = useAchievements();

// Después de que el usuario complete realmente una sesión:
await recordActivity("workout_completed");

// Cuando complete un tutorial:
await recordActivity("tutorial_completed");

// Cuando apruebe una evaluación técnica:
await recordActivity("technique_assessment_passed");

// Cuando aprenda un movimiento nuevo:
await recordActivity("movement_learned", { movementId: "kettlebell_swing" });

// Cuando complete una misión:
await recordActivity("challenge_completed");
```

Los eventos deben dispararse desde el resultado real de cada actividad, no al abrir una pantalla ni al pulsar repetidamente un botón de prueba.

## 5. Abrir las pantallas

Puedes agregar estas pantallas a tu navegación:

```jsx
import AchievementsScreen from "./src/screens/AchievementsScreen";
import MedalsScreen from "./src/screens/MedalsScreen";
import MissionsScreen from "./src/screens/MissionsScreen";
```

Luego regístralas en tu navegador actual. Este paquete no presupone si usas React Navigation, Expo Router u otro sistema.

## 6. Consultar el progreso

```jsx
const {
  progress,
  level,
  unlockedAchievements,
  recordActivity,
  resetProgress
} = useAchievements();
```

`resetProgress()` es una función de desarrollo. No la conectes a un botón visible para usuarios.

## 7. Sincronización entre dispositivos

Esta entrega guarda el progreso localmente en el dispositivo mediante AsyncStorage. Para sincronizar entre dispositivos y recuperar el progreso al iniciar sesión, conecta `AchievementsProvider` a tu backend y usa el `userId` autenticado como clave. No se incluye una sincronización ficticia ni credenciales de servidor.

## 8. Notas importantes

- Los logros se desbloquean una sola vez.
- Los XP se calculan en el motor y no deben asignarse desde la interfaz.
- La evaluación de técnica debe ser real y apropiada. No marques una técnica como aprobada solo por ver un video.
- No premies entrenar con dolor, usar cargas excesivas o sacrificar la recuperación.
- Los datos de AsyncStorage no son una protección contra manipulación. Para tablas competitivas o recompensas de valor, valida eventos y XP en el servidor.
- Las medallas usan iconos vectoriales como marcadores visuales. Puedes sustituirlos por ilustraciones PNG propias más adelante.
