import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ children, onSubmit, isLoading }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onSubmit}
    >
      <Text style={{ textAlign: "center" }}>
        {isLoading ? "please wait.." : children}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  button: {
    backgroundColor: "#ff9900",
    height: 50,
    borderRadius: 24,
    marginBottom: 20,
    marginTop: 30,
    justifyContent: "center",
  },
});
