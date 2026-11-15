import { ACHIEVEMENTS, LEVELS, WEEKLY_MISSIONS } from "./achievementsData";

export const createInitialProgress = () => ({
  version: 1,
  totalXp: 0,
  stats: {
    workout_completed: 0,
    tutorial_completed: 0,
    technique_assessment_passed: 0,
    challenge_completed: 0,
    training_category_completed: 0,
    return_sessions_completed: 0,
  },
  masteredMovements: [],
  completedCategories: [],
  unlockedAchievementIds: [],
  completedMissionIds: [],
  missionProgress: {},
  recentUnlock: null,
  updatedAt: new Date().toISOString(),
});

export function getLevel(totalXp = 0) {
  const current = [...LEVELS].reverse().find((item) => totalXp >= item.xp) || LEVELS[0];
  const next = LEVELS.find((item) => item.level === current.level + 1);
  const progress = next
    ? Math.max(0, Math.min(100, ((totalXp - current.xp) / (next.xp - current.xp)) * 100))
    : 100;
  return { ...current, next, progress };
}

function eventCount(progress, event) {
  if (event === "unique_movements_mastered") return progress.masteredMovements.length;
  if (event === "medals_unlocked") return progress.unlockedAchievementIds.length;
  if (event === "all_initial_achievements") return progress.unlockedAchievementIds.length;
  return progress.stats[event] || 0;
}

function isEligible(achievement, progress, payload) {
  if (achievement.event === "movement_mastered") {
    return payload?.movementId === achievement.movementId &&
      progress.masteredMovements.includes(achievement.movementId);
  }
  return eventCount(progress, achievement.event) >= achievement.target;
}

export function applyActivity(previous, event, payload = {}) {
  const progress = {
    ...previous,
    stats: { ...previous.stats },
    masteredMovements: [...previous.masteredMovements],
    completedCategories: [...previous.completedCategories],
    unlockedAchievementIds: [...previous.unlockedAchievementIds],
    missionProgress: { ...previous.missionProgress },
  };

  if (event === "movement_mastered" && payload.movementId &&
      !progress.masteredMovements.includes(payload.movementId)) {
    progress.masteredMovements.push(payload.movementId);
  } else if (event === "training_category_completed" && payload.category &&
      !progress.completedCategories.includes(payload.category)) {
    progress.completedCategories.push(payload.category);
  } else if (event in progress.stats) {
    progress.stats[event] += 1;
  } else {
    throw new Error(`Evento de progreso no reconocido: ${event}`);
  }

  if (event === "training_category_completed") {
    progress.stats.training_category_completed = progress.completedCategories.length;
  }

  // XP base por actividad: evita que una llamada accidental otorgue cantidades arbitrarias.
  const baseXp = {
    workout_completed: 40,
    tutorial_completed: 20,
    technique_assessment_passed: 60,
    movement_mastered: 50,
    challenge_completed: 75,
    training_category_completed: 25,
    return_sessions_completed: 40,
  }[event] || 0;
  progress.totalXp += baseXp;

  WEEKLY_MISSIONS.forEach((mission) => {
    if (mission.event === event && !progress.completedMissionIds.includes(mission.id)) {
      const oldValue = progress.missionProgress[mission.id] || 0;
      const newValue = Math.min(mission.target, oldValue + 1);
      progress.missionProgress[mission.id] = newValue;
      if (newValue >= mission.target) {
        progress.completedMissionIds.push(mission.id);
        progress.totalXp += mission.xp;
      }
    }
  });

  const justUnlocked = [];
  ACHIEVEMENTS.forEach((achievement) => {
    if (!progress.unlockedAchievementIds.includes(achievement.id) &&
        isEligible(achievement, progress, payload)) {
      progress.unlockedAchievementIds.push(achievement.id);
      progress.totalXp += achievement.xp;
      justUnlocked.push(achievement);
    }
  });

  // Revisa logros que dependen del total de medallas, después de desbloqueos de esta actividad.
  ACHIEVEMENTS.forEach((achievement) => {
    if (!progress.unlockedAchievementIds.includes(achievement.id) &&
        (achievement.event === "medals_unlocked" || achievement.event === "all_initial_achievements") &&
        eventCount(progress, achievement.event) >= achievement.target) {
      progress.unlockedAchievementIds.push(achievement.id);
      progress.totalXp += achievement.xp;
      justUnlocked.push(achievement);
    }
  });

  progress.recentUnlock = justUnlocked.length ? justUnlocked[justUnlocked.length - 1].id : null;
  progress.updatedAt = new Date().toISOString();
  return { progress, justUnlocked };
}
