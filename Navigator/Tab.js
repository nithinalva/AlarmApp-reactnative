import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import Alarm from "../screens/Alarm";
import Stats from "../screens/Stats";
import Wallet from "../screens/Wallet";
import IonicIcon from "react-native-vector-icons";
import colors from "../res/colors";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Alarm"
        activeColor={colors.primary}
        barStyle={{ backgroundColor: "#ffff" }}
      >
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarLabel: "Stats",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="chart-bell-curve"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Alarm"
          component={Alarm}
          options={{
            tabBarLabel: "Alarm",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="alarm" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{
            tabBarLabel: "Wallet",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="wallet-plus-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tab;
