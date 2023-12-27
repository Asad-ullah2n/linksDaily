import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const FooterLinks = ({ name, icon }) => {
  return (
    <View>
      <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
        <Ionicons
          name={icon}
          size={24}
          color="black"
          style={{ alignSelf: "center" }}
        />
        <Text>{name}</Text>
      </Pressable>
    </View>
  );
};

export default FooterLinks;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
