import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthProvider } from "../auth/AuthContext";

import ScreenNav from "./ScreenNav";

const Stack = createNativeStackNavigator();

export default function Rootnavigation() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ScreenNav />
      </AuthProvider>
    </NavigationContainer>
  );
}
