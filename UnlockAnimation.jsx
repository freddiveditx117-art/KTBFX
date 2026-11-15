import React, { useEffect, useRef } from "react";
import { Animated, Modal, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function UnlockAnimation({ achievement, onClose }) {
  const scale = useRef(new Animated.Value(0.65)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (achievement) {
      scale.setValue(0.65);
      opacity.setValue(0);
      Animated.parallel([
        Animated.spring(scale, { toValue: 1, useNativeDriver: true, friction: 5 }),
        Animated.timing(opacity, { toValue: 1, duration: 350, useNativeDriver: true }),
      ]).start();
    }
  }, [achievement, opacity, scale]);

  return (
    <Modal visible={!!achievement} transparent animationType="fade" onRequestClose={onClose}>
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.88)", justifyContent: "center", alignItems: "center", padding: 24 }}>
        <Animated.View style={{ alignItems: "center", transform: [{ scale }], opacity, width: "100%" }}>
          <Text style={{ color: "#F5C451", fontSize: 13, fontWeight: "900", letterSpacing: 2 }}>¡NUEVA MEDALLA!</Text>
          <View style={{ width: 138, height: 138, borderRadius: 69, borderWidth: 3, borderColor: "#E8B744", backgroundColor: "#202124", alignItems: "center", justifyContent: "center", marginVertical: 22 }}>
            <Ionicons name={achievement?.icon || "medal"} size={76} color="#F5C451" />
          </View>
          <Text style={{ color: "#FFFFFF", fontSize: 24, fontWeight: "900", textAlign: "center" }}>{achievement?.title}</Text>
          <Text style={{ color: "#D1D5DB", textAlign: "center", marginTop: 10 }}>{achievement?.description}</Text>
          <Text style={{ color: "#F5C451", fontSize: 18, fontWeight: "900", marginTop: 16 }}>+{achievement?.xp} XP</Text>
          <Pressable onPress={onClose} style={{ backgroundColor: "#D9A52E", paddingHorizontal: 32, paddingVertical: 13, borderRadius: 24, marginTop: 28 }}>
            <Text style={{ color: "#171717", fontWeight: "900" }}>CONTINUAR</Text>
          </Pressable>
        </Animated.View>
      </View>
    </Modal>
  );
}
