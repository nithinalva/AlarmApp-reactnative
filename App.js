import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Oboarding from "./screens/Oboarding";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/Register";
import Alarm from "./screens/Alarm";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Screen name="Home" component={Oboarding} />
        <Screen name="Register" component={Register} />
        <Screen name="Alarm" component={Alarm} />
      </Navigator>
    </NavigationContainer>
  );
}
