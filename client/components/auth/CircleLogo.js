import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CircleLogo = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 150, height: 150, marginVertical: 20 }}
      />
    </View>
  );
};

export default CircleLogo;

const styles = StyleSheet.create({});
