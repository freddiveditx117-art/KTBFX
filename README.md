# KTBFX — starter app

Starter mobile app for Android and iOS, built with Expo + React Native.

## Run locally
1. Install Node.js (LTS).
2. Install dependencies: `npm install`
3. Start Expo: `npx expo start`
4. Scan the QR code with Expo Go, or use an Android/iOS simulator.

## Included in this starter
- KTBFX black/red/white visual identity
- Spanish/English language toggle
- Home, exercise library, coach and progress screens
- Local demo workout generator
- Google and Apple sign-in entry points (visual placeholders only)

## Important: what is not connected yet
- Google and Apple authentication are not live. Provider credentials, OAuth configuration, redirect URLs and a backend project are required.
- Workout generation is a local demo, not an AI service.
- Exercise videos/animations, user accounts, cloud progress storage and publishing are not connected.
- Exercise plans are illustrative and must be reviewed by a qualified kettlebell coach before being used as training prescriptions.

## Next development milestones
1. Create a Supabase project and configure Google/Apple providers.
2. Implement secure sign-in and user profiles.
3. Add reviewed exercise media and instructional content.
4. Store workout history and user preferences.
5. Test on real Android and iOS devices.
6. Prepare store listings and release builds.

Bundle identifiers are placeholders: `com.ktbfx.app`. Change them to identifiers you control before publishing.
