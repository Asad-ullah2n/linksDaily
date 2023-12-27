import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";
import { AuthProvider } from "./auth/AuthContext";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <AuthProvider></AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
