import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import axios from "axios";
import UserInput from "../components/auth/UserInput";
import Button from "../components/auth/Button";
import CircleLogo from "../components/auth/CircleLogo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../auth/AuthContext";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("asad");
  const [email, setEmail] = useState("abc@gmail.com");
  const [password, setPassword] = useState("123456");
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useContext(AuthContext);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!name || !email || !password) {
      alert("all field are required");
      setIsLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(`/signup`, {
        name,
        email,
        password,
      });

      if (data.error) {
        alert(data.error);
        setIsLoading(false);
      } else {
        // save to context

        setState(data);
        //save to asynstorage
        await AsyncStorage.setItem("@auth", JSON.stringify(data));
        setIsLoading(false);
        alert("Sign Up success");
        navigation.navigate("Home");
      }
    } catch (error) {
      setIsLoading(false);
    }
    // const LoadfromAsyncStorage = async () => {
    //   const data = await AsyncStorage.getItem("@auth");
    //   console.log("LOAD FROM ASYNC STORAGE =>", data);
    // };
    // LoadfromAsyncStorage();
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        contentContainerStyle: { justifyContent: "center" },
        padding: 16,
      }}
    >
      <CircleLogo />
      <Text style={{ fontSize: 26, alignSelf: "center" }}> Sign Up</Text>
      <UserInput
        label="Name"
        autoCapitalize="words"
        autoCorrect={false}
        value={name}
        setValue={setName}
      />
      <UserInput
        label="Email"
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize="none"
        value={email}
        setValue={setEmail}
      />
      <UserInput
        label="Password"
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
      />
      <Button onSubmit={handleSubmit} isLoading={isLoading}>
        Sign Up
      </Button>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <Text style={{ marginRight: 5 }}>Already Joined? </Text>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={{ color: "#ff9900" }}>Sign In</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
