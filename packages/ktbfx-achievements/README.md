# @freddiveditx117/ktbfx-achievements

Sistema de logros, medallas, niveles, XP y misiones semanales para Expo y React Native.

## Instalación

Configura el registro de GitHub Packages para el scope `@freddiveditx117` en tu proyecto y autentícate con un token de GitHub que tenga permiso `read:packages`. No guardes el token en el código ni lo subas al repositorio.

```bash
npm install @freddiveditx117/ktbfx-achievements
```

Instala también las dependencias peer si tu aplicación aún no las tiene:

```bash
npx expo install @react-native-async-storage/async-storage @expo/vector-icons
```

## Uso

Envuelve la aplicación o la sección que usará el sistema:

```jsx
import { AchievementsProvider } from "@freddiveditx117/ktbfx-achievements";

export default function App() {
  return (
    <AchievementsProvider userId="id-del-usuario">
      <TuAplicacion />
    </AchievementsProvider>
  );
}
```

Registra actividades desde una pantalla o componente:

```jsx
import { useAchievements } from "@freddiveditx117/ktbfx-achievements";

function WorkoutCompleteButton() {
  const { recordActivity, progress, level } = useAchievements();
  const finishWorkout = async () => {
    const { justUnlocked } = await recordActivity("workout_completed");
    console.log("Logros nuevos:", justUnlocked);
  };
  return null;
}
```

Eventos disponibles: `workout_completed`, `tutorial_completed`, `technique_assessment_passed`, `movement_mastered` (con `{ movementId: "kettlebell_swing" }`), `challenge_completed`, `training_category_completed` (con `{ category: "fuerza" }`) y `return_sessions_completed`.

## Componentes y datos

Exporta `ACHIEVEMENTS`, `LEVELS`, `WEEKLY_MISSIONS`, `AchievementCard`, `MedalBadge`, `UnlockAnimation`, `XPProgressBar`, `getLevel`, `applyActivity`, `loadProgress`, `saveProgress` y `clearProgress`.

## Almacenamiento y seguridad

El progreso se guarda localmente con AsyncStorage en el dispositivo y se separa por `userId`. Esto no sincroniza automáticamente entre dispositivos ni protege contra modificaciones del cliente. Si XP, logros o clasificaciones tienen valor competitivo, valida las actividades en un servidor confiable antes de otorgar recompensas.
