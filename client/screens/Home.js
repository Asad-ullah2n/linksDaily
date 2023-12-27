import { View, Text } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import FooterTab from "../components/nav/FooterTab";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [state, setState] = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
      <Text>{JSON.stringify(state, null, 4)}</Text>
      <FooterTab />
    </SafeAreaView>
  );
};

export default Home;
