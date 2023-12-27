import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";

import Home from "../screens/Home";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const Stack = createNativeStackNavigator();

export default function ScreenNav() {
  const [state, setState] = useContext(AuthContext);
  let authenticate = state && state.token !== "" && state.user !== null;

  return (
    <Stack.Navigator>
      {authenticate ? (
        <Stack.Screen
          name="Home"
          component={Home}
          //   options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
