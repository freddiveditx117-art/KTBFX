# KTBFX — Kettlebell Training Experience

KTBFX is a bilingual (Spanish/English) Expo React Native starter app for learning kettlebell movements and building simple workouts.

## Version 1.1.0
- Refreshed dark, black-and-red visual identity.
- Eight illustrated movement cards, each with its own locally bundled image.
- Search and category filters in the movement library.
- Step-by-step technique notes, coaching cues and safety reminders for each movement.
- Workout builder with level, goal and duration selections.
- Session counter for the current app session.
- Spanish/English language toggle.

## Important limitations
- The workout builder uses simple on-device rules; it is not an AI coach or medical advice.
- Progress is held in app memory and may reset when the app closes. Cloud sync and permanent storage are not included.
- Google/Apple sign-in, video playback, user accounts and backend services are not connected yet.
- Exercise illustrations are educational visual guides, not a substitute for an in-person demonstration from a qualified coach.

## Build
The project uses Expo SDK 54. Run `npm install`, then `npx expo start` for development. For an Android APK, use the existing EAS `preview` profile in `eas.json`.
