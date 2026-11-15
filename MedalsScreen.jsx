import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ACHIEVEMENTS } from "../achievements/achievementsData";
import { useAchievements } from "../achievements/AchievementsProvider";
import MedalBadge from "../components/MedalBadge";

export default function MedalsScreen() {
  const { unlockedAchievements } = useAchievements();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#111214" }} contentContainerStyle={{ padding: 18 }}>
      <Text style={{ color: "#FFFFFF", fontSize: 25, fontWeight: "900", marginBottom: 6 }}>MEDALLAS KTBFX</Text>
      <Text style={{ color: "#AEB0B6", marginBottom: 20 }}>{unlockedAchievements.length} de {ACHIEVEMENTS.length} desbloqueadas</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", rowGap: 24 }}>
        {ACHIEVEMENTS.map((item) => (
          <View key={item.id} style={{ width: "33.33%", paddingHorizontal: 4 }}>
            <MedalBadge achievement={item} unlocked={unlockedAchievements.includes(item.id)} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
