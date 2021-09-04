import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import IonicIcon from "react-native-vector-icons/Ionicons";
import Wallet from "../screens/Wallet";
import Stats from "../screens/Stats";
import Alarm from "../screens/Alarm";
const Stack = createNativeStackNavigator();

const WalletNav = () => {
  <Stack.Navigator>
    <Stack.Screen name={"Wallet"} component={Wallet} />
  </Stack.Navigator>;
};

const StatsNav = () => {
  <Stack.Navigator>
    <Stack.Screen name="Stats" component={Stats} />
  </Stack.Navigator>;
};

const AlarmNav = () => {
  <Stack.Navigator>
    <Stack.Screen name="Alarm" component={Alarm} />
  </Stack.Navigator>;
};

const Tab = createMaterialBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Wallet" component={WalletNav} />
        <Tab.Screen name="Stats" component={StatsNav} />
        <Tab.Screen name="Alarm" component={AlarmNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
