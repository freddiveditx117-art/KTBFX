import React, { useState } from "react";
import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { useAchievements } from "../achievements/AchievementsProvider";
import UnlockAnimation from "../components/UnlockAnimation";
import { ACHIEVEMENTS } from "../achievements/achievementsData";

// Ejemplo de pruebas manuales. No uses estos botones en la versión pública.
export default function IntegrationExample() {
  const { recordActivity } = useAchievements();
  const [unlocked, setUnlocked] = useState(null);

  const run = async (event, payload) => {
    try {
      const result = await recordActivity(event, payload);
      if (result?.justUnlocked?.length) setUnlocked(result.justUnlocked[0]);
      else Alert.alert("Actividad registrada", "Tu progreso KTBFX se ha actualizado.");
    } catch (error) {
      Alert.alert("No se pudo registrar", error.message);
    }
  };

  const button = (label, callback) => (
    <Pressable onPress={callback} style={{ backgroundColor: "#292A2F", padding: 14, borderRadius: 12, marginBottom: 10 }}>
      <Text style={{ color: "#FFFFFF", fontWeight: "700" }}>{label}</Text>
    </Pressable>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#111214" }} contentContainerStyle={{ padding: 18 }}>
      <Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: "900", marginBottom: 16 }}>PRUEBAS DE INTEGRACIÓN</Text>
      {button("Registrar sesión completada", () => run("workout_completed"))}
      {button("Registrar tutorial completado", () => run("tutorial_completed"))}
      {button("Aprobar evaluación técnica", () => run("technique_assessment_passed"))}
      {button("Dominar Swing (evaluación aprobada)", () => run("movement_mastered", { movementId: "kettlebell_swing" }))}
      {button("Completar desafío", () => run("challenge_completed"))}
      <UnlockAnimation achievement={unlocked} onClose={() => setUnlocked(null)} />
    </ScrollView>
  );
}
