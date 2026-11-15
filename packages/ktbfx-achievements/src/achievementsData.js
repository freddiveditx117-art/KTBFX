export const LEVELS = [
  { level: 1, name: "Iniciado", xp: 0 }, { level: 2, name: "Aprendiz", xp: 300 },
  { level: 3, name: "Discípulo", xp: 700 }, { level: 4, name: "Guerrero", xp: 1200 },
  { level: 5, name: "Especialista", xp: 2000 }, { level: 6, name: "Maestro", xp: 3000 },
  { level: 7, name: "Élite", xp: 4500 }, { level: 8, name: "Leyenda", xp: 6500 },
  { level: 9, name: "Mítico", xp: 9000 }, { level: 10, name: "KTBFX Legend", xp: 12000 },
];

export const ACHIEVEMENTS = [
  { id: "first_workout", title: "Despertar de Hierro", description: "Completa tu primer entrenamiento.", icon: "medal", category: "Inicio", xp: 100, rarity: "Bronce", event: "workout_completed", target: 1 },
  { id: "first_tutorial", title: "Aprendiz del Hierro", description: "Completa tu primer tutorial.", icon: "book-open", category: "Aprendizaje", xp: 100, rarity: "Bronce", event: "tutorial_completed", target: 1 },
  { id: "first_technique", title: "Guardián de la Técnica", description: "Aprueba tu primera evaluación técnica.", icon: "shield-check", category: "Técnica", xp: 200, rarity: "Plata", event: "technique_assessment_passed", target: 1 },
  { id: "swing_master", title: "Maestro del Swing", description: "Aprueba la evaluación del Kettlebell Swing.", icon: "activity", category: "Técnica", xp: 250, rarity: "Oro", event: "movement_mastered", target: 1, movementId: "kettlebell_swing" },
  { id: "goblet_king", title: "Rey del Goblet", description: "Aprueba la evaluación del Goblet Squat.", icon: "crown", category: "Técnica", xp: 250, rarity: "Oro", event: "movement_mastered", target: 1, movementId: "goblet_squat" },
  { id: "clean_master", title: "Dominio del Clean", description: "Aprueba la evaluación del Kettlebell Clean.", icon: "zap", category: "Técnica", xp: 250, rarity: "Oro", event: "movement_mastered", target: 1, movementId: "kettlebell_clean" },
  { id: "steel_crown", title: "Corona de Acero", description: "Aprueba la evaluación del Press.", icon: "award", category: "Técnica", xp: 300, rarity: "Oro", event: "movement_mastered", target: 1, movementId: "kettlebell_press" },
  { id: "control_architect", title: "Arquitecto del Control", description: "Completa el aprendizaje guiado del Turkish Get-Up.", icon: "compass", category: "Aprendizaje", xp: 350, rarity: "Platino", event: "movement_mastered", target: 1, movementId: "turkish_get_up" },
  { id: "five_sessions", title: "Espíritu Imparable", description: "Completa 5 sesiones de entrenamiento.", icon: "flame", category: "Constancia", xp: 200, rarity: "Bronce", event: "workout_completed", target: 5 },
  { id: "ten_sessions", title: "Disciplina de Hierro", description: "Completa 10 sesiones de entrenamiento.", icon: "calendar-check", category: "Constancia", xp: 300, rarity: "Plata", event: "workout_completed", target: 10 },
  { id: "twentyfive_sessions", title: "Campeón KTBFX", description: "Completa 25 sesiones de entrenamiento.", icon: "trophy", category: "Constancia", xp: 500, rarity: "Oro", event: "workout_completed", target: 25 },
  { id: "ten_movements", title: "Coleccionista de Movimientos", description: "Aprueba 10 movimientos diferentes.", icon: "layers", category: "Aprendizaje", xp: 500, rarity: "Platino", event: "unique_movements_mastered", target: 10 },
  { id: "all_categories", title: "Explorador KTBFX", description: "Completa una sesión en cada una de las 4 categorías iniciales.", icon: "compass", category: "Exploración", xp: 400, rarity: "Plata", event: "training_category_completed", target: 4 },
  { id: "three_challenges", title: "Desafiante", description: "Completa 3 desafíos oficiales.", icon: "flag", category: "Desafíos", xp: 400, rarity: "Plata", event: "challenge_completed", target: 3 },
  { id: "five_assessments", title: "Precisión Absoluta", description: "Aprueba 5 evaluaciones técnicas.", icon: "target", category: "Técnica", xp: 500, rarity: "Platino", event: "technique_assessment_passed", target: 5 },
  { id: "returning", title: "Renacimiento", description: "Vuelve a entrenar y completa 3 sesiones después de registrar tu regreso.", icon: "refresh-cw", category: "Constancia", xp: 300, rarity: "Plata", event: "return_sessions_completed", target: 3 },
  { id: "fifteen_medals", title: "Leyenda del Hierro", description: "Desbloquea 15 medallas diferentes.", icon: "crown", category: "Especial", xp: 1000, rarity: "Legendaria", event: "medals_unlocked", target: 15 },
  { id: "all_initial", title: "Dios del KTBFX", description: "Desbloquea toda la colección inicial de medallas.", icon: "gem", category: "Especial", xp: 1500, rarity: "Legendaria", event: "all_initial_achievements", target: 17 },
];

export const WEEKLY_MISSIONS = [
  { id: "weekly_learn_two", title: "Explorador de movimientos", description: "Aprueba 2 movimientos diferentes esta semana.", event: "movement_mastered", target: 2, xp: 100 },
  { id: "weekly_three_workouts", title: "Constancia inteligente", description: "Completa 3 sesiones esta semana, respetando tus descansos.", event: "workout_completed", target: 3, xp: 150 },
  { id: "weekly_tutorials", title: "Estudiante del hierro", description: "Completa 3 tutoriales esta semana.", event: "tutorial_completed", target: 3, xp: 75 },
  { id: "weekly_assessment", title: "Técnica primero", description: "Aprueba una evaluación técnica esta semana.", event: "technique_assessment_passed", target: 1, xp: 150 },
];
