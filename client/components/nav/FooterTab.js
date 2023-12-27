import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import FooterLinks from "../FooterLinks";

const FooterTab = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 10,
        justifyContent: "space-around",
      }}
    >
      <FooterLinks name="Home" icon="home" />
      <FooterLinks name="Post" icon="add-circle" />
      <FooterLinks name="Links" icon="list" />
      <FooterLinks name="Account" icon="person-add-sharp" />
    </View>
  );
};

export default FooterTab;

const styles = StyleSheet.create({});
