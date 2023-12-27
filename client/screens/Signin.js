import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import axios from "axios";
import UserInput from "../components/auth/UserInput";
import Button from "../components/auth/Button";
import CircleLogo from "../components/auth/CircleLogo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../auth/AuthContext";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("aabc@gmail.com");
  const [password, setPassword] = useState("123456");
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useContext(AuthContext);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!email || !password) {
      alert("all field are required");
      setIsLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(`/signin`, {
        email,
        password,
      });

      if (data.error) {
        alert(data.error);
        setIsLoading(false);
      } else {
        // store to context
        setState(data);

        // store to asyncstorage
        await AsyncStorage.setItem("@auth", JSON.stringify(data));
        setIsLoading(false);
        alert("Sign in success");
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log(error);
      alert("error while sign in");
      setIsLoading(false);
    }
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 16,
      }}
    >
      <CircleLogo />
      <Text style={{ fontSize: 26, alignSelf: "center" }}> Sign In</Text>

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
        Sign In
      </Button>

      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => navigation.navigate("Signup")}
      >
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={{ marginRight: 5 }}>Not yet Registered?</Text>
          <Text style={{ color: "#ff9900" }}>Sign Up</Text>
        </View>
      </Pressable>

      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <Text
          style={{ color: "orange", textAlign: "center", marginVertical: 5 }}
        >
          Forgot Password
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
