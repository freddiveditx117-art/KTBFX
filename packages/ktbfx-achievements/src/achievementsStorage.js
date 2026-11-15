import AsyncStorage from "@react-native-async-storage/async-storage";
import { createInitialProgress } from "./achievementsEngine.js";
const KEY_PREFIX = "ktbfx_achievements_v1";
export async function loadProgress(userId = "guest") {
  try { const raw = await AsyncStorage.getItem(`${KEY_PREFIX}:${userId}`); if (!raw) return createInitialProgress(); return { ...createInitialProgress(), ...JSON.parse(raw) }; }
  catch (error) { console.warn("No se pudo cargar el progreso KTBFX:", error); return createInitialProgress(); }
}
export async function saveProgress(progress, userId = "guest") { await AsyncStorage.setItem(`${KEY_PREFIX}:${userId}`, JSON.stringify(progress)); }
export async function clearProgress(userId = "guest") { await AsyncStorage.removeItem(`${KEY_PREFIX}:${userId}`); }
