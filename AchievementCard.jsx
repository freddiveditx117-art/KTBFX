import React from "react";
import { View, Text } from "react-native";
import MedalBadge from "./MedalBadge";

export default function AchievementCard({ achievement, unlocked }) {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "#202124", padding: 13, borderRadius: 14, marginBottom: 10, alignItems: "center" }}>
      <View style={{ width: 84 }}>
        <MedalBadge achievement={achievement} unlocked={unlocked} />
      </View>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={{ color: "#F5F5F5", fontWeight: "800", fontSize: 14 }}>{achievement.title}</Text>
        <Text style={{ color: "#B9BBC1", fontSize: 12, marginTop: 4 }}>{achievement.description}</Text>
        <Text style={{ color: "#E8B744", fontSize: 11, fontWeight: "700", marginTop: 7 }}>
          {achievement.rarity} · {achievement.xp} XP
        </Text>
      </View>
    </View>
  );
}
