import React from "react";
import { View, Text } from "react-native";
export default function XPProgressBar({ xp, level, compact = false }) {
  const nextXp = level.next?.xp ?? level.xp; const remaining = Math.max(0, nextXp - xp);
  return <View>
    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
      <Text style={{ color: "#F5C451", fontWeight: "800" }}>NIVEL {level.level} · {level.name.toUpperCase()}</Text>
      <Text style={{ color: "#D1D5DB", fontSize: 12 }}>{xp.toLocaleString()} XP</Text>
    </View>
    <View style={{ height: 10, backgroundColor: "#343434", borderRadius: 20, overflow: "hidden" }}><View style={{ height: "100%", width: `${level.progress}%`, backgroundColor: "#D9A52E", borderRadius: 20 }} /></View>
    {!compact && <Text style={{ color: "#A3A3A3", fontSize: 12, marginTop: 6 }}>{level.next ? `${remaining.toLocaleString()} XP para ${level.next.name}` : "¡Nivel máximo alcanzado!"}</Text>}
  </View>;
}
