import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const UserInput = ({
  label,
  autoCapitalize = "none",
  secureTextEntry,
  keyboardType,
  value,
  setValue,
}) => {
  return (
    <View>
      <Text style={{ paddingVertical: 8 }}>{label}</Text>
      <TextInput
        style={{ borderBottomWidth: 0.5, borderBottomColor: "gray" }}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default UserInput;

const styles = StyleSheet.create({});
