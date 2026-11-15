import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { applyActivity, createInitialProgress, getLevel } from "./achievementsEngine.js";
import { clearProgress, loadProgress, saveProgress } from "./achievementsStorage.js";
const AchievementsContext = createContext(null);
export function AchievementsProvider({ children, userId = "guest" }) {
  const [progress, setProgress] = useState(createInitialProgress);
  const progressRef = useRef(progress);
  const [ready, setReady] = useState(false);
  useEffect(() => { let active = true; setReady(false); loadProgress(userId).then((saved) => { if (active) { progressRef.current = saved; setProgress(saved); setReady(true); } }); return () => { active = false; }; }, [userId]);
  useEffect(() => { if (ready) saveProgress(progress, userId).catch((error) => console.warn("No se pudo guardar el progreso KTBFX:", error)); }, [progress, ready, userId]);
  const recordActivity = useCallback(async (event, payload = {}) => {
    const allowed = ["workout_completed", "tutorial_completed", "technique_assessment_passed", "movement_mastered", "challenge_completed", "training_category_completed", "return_sessions_completed"];
    if (!allowed.includes(event)) throw new Error("Actividad no permitida.");
    const result = applyActivity(progressRef.current, event, payload); progressRef.current = result.progress; setProgress(result.progress); return result;
  }, []);
  const resetProgress = useCallback(async () => { await clearProgress(userId); const initial = createInitialProgress(); progressRef.current = initial; setProgress(initial); }, [userId]);
  const value = useMemo(() => ({ progress, level: getLevel(progress.totalXp), ready, recordActivity, resetProgress, unlockedAchievements: progress.unlockedAchievementIds }), [progress, ready, recordActivity, resetProgress]);
  if (!ready) return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}><ActivityIndicator size="large" color="#D9A52E" /></View>;
  return <AchievementsContext.Provider value={value}>{children}</AchievementsContext.Provider>;
}
export function useAchievements() { const context = useContext(AchievementsContext); if (!context) throw new Error("useAchievements debe usarse dentro de AchievementsProvider."); return context; }
