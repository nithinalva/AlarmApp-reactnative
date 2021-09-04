import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Oboarding from "./screens/Oboarding";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./screens/Register";
import Alarm from "./screens/Alarm";
import Tab from "./Navigator/Tab";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App(props) {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer independent={true}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Screen name="Home" component={Oboarding} />
        <Screen name="Register" component={Register} />
        <Screen name="Alarm" component={Tab} />
      </Navigator>
    </NavigationContainer>
  );
}
