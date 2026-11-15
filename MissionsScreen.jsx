import React from "react";
import { ScrollView, Text, View } from "react-native";
import { WEEKLY_MISSIONS } from "../achievements/achievementsData";
import { useAchievements } from "../achievements/AchievementsProvider";

export default function MissionsScreen() {
  const { progress } = useAchievements();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#111214" }} contentContainerStyle={{ padding: 18 }}>
      <Text style={{ color: "#FFFFFF", fontSize: 25, fontWeight: "900" }}>MISIONES SEMANALES</Text>
      <Text style={{ color: "#AEB0B6", marginTop: 6, marginBottom: 20 }}>Avanza a tu ritmo y respeta tus descansos.</Text>
      {WEEKLY_MISSIONS.map((mission) => {
        const count = progress.missionProgress[mission.id] || 0;
        const done = progress.completedMissionIds.includes(mission.id);
        const pct = Math.min(100, (count / mission.target) * 100);
        return (
          <View key={mission.id} style={{ backgroundColor: "#202124", padding: 16, borderRadius: 15, marginBottom: 12 }}>
            <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "800" }}>{mission.title}</Text>
            <Text style={{ color: "#B9BBC1", fontSize: 12, marginTop: 5 }}>{mission.description}</Text>
            <View style={{ height: 8, backgroundColor: "#3A3B40", borderRadius: 10, marginTop: 14, overflow: "hidden" }}>
              <View style={{ width: `${pct}%`, height: "100%", backgroundColor: done ? "#69B987" : "#D9A52E" }} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 9 }}>
              <Text style={{ color: "#D1D5DB", fontSize: 11 }}>{count}/{mission.target}</Text>
              <Text style={{ color: done ? "#69B987" : "#F5C451", fontSize: 11, fontWeight: "800" }}>{done ? "COMPLETADA" : `+${mission.xp} XP`}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
