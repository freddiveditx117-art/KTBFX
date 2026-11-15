import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const colors = { Bronce: "#B77945", Plata: "#BFC7D5", Oro: "#F0BE45", Platino: "#8DD7DF", Legendaria: "#C49AFF" };
export default function MedalBadge({ achievement, unlocked = false, size = "normal" }) {
  const color = unlocked ? (colors[achievement.rarity] || "#D9A52E") : "#55585F"; const dimension = size === "large" ? 76 : 58;
  return <View style={{ alignItems: "center", width: "100%", opacity: unlocked ? 1 : 0.48 }}>
    <View style={{ width: dimension, height: dimension, borderRadius: dimension / 2, backgroundColor: "#202124", borderWidth: 2, borderColor: color, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name={achievement.icon || "medal"} size={dimension * 0.48} color={color} />
    </View>
    <Text numberOfLines={2} style={{ color: "#F5F5F5", fontSize: 11, fontWeight: "700", textAlign: "center", marginTop: 7 }}>{achievement.title}</Text>
    <Text style={{ color, fontSize: 9, marginTop: 3 }}>{unlocked ? "DESBLOQUEADA" : "BLOQUEADA"}</Text>
  </View>;
}
