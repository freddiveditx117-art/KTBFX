import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ACHIEVEMENTS } from "../achievements/achievementsData";
import { useAchievements } from "../achievements/AchievementsProvider";
import XPProgressBar from "../components/XPProgressBar";
import AchievementCard from "../components/AchievementCard";

export default function AchievementsScreen() {
  const { progress, level, unlockedAchievements } = useAchievements();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#111214" }} contentContainerStyle={{ padding: 18 }}>
      <Text style={{ color: "#FFFFFF", fontSize: 26, fontWeight: "900" }}>CENTRO DE LOGROS</Text>
      <Text style={{ color: "#AEB0B6", marginTop: 5, marginBottom: 20 }}>Aprende. Domina. Evoluciona.</Text>
      <View style={{ backgroundColor: "#202124", borderRadius: 18, padding: 16, marginBottom: 20 }}>
        <XPProgressBar xp={progress.totalXp} level={level} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 18 }}>
          <View><Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: "900" }}>{unlockedAchievements.length}</Text><Text style={{ color: "#AEB0B6", fontSize: 11 }}>MEDALLAS</Text></View>
          <View><Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: "900" }}>{progress.stats.workout_completed || 0}</Text><Text style={{ color: "#AEB0B6", fontSize: 11 }}>SESIONES</Text></View>
          <View><Text style={{ color: "#FFFFFF", fontSize: 22, fontWeight: "900" }}>{progress.masteredMovements.length}</Text><Text style={{ color: "#AEB0B6", fontSize: 11 }}>MOVIMIENTOS</Text></View>
        </View>
      </View>
      <Text style={{ color: "#F5C451", fontWeight: "900", fontSize: 16, marginBottom: 12 }}>TU COLECCIÓN</Text>
      {ACHIEVEMENTS.map((item) => (
        <AchievementCard key={item.id} achievement={item} unlocked={unlockedAchievements.includes(item.id)} />
      ))}
    </ScrollView>
  );
}
