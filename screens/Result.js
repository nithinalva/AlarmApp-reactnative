import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import moment from "moment";
import Fonts from "../res/Fonts";
import { Colors } from "react-native-paper";
import colors from "../res/colors";

import { useNavigation } from "@react-navigation/core";

import * as Notification from "expo-notifications";
import WalletContext from "../context/store/WalletContext";
import { REMOVE_MONEY } from "../context/actions/action.types";
import AlertContext from "../context/store/AlertContext";
const Result = () => {
  const { width, height } = Dimensions.get("screen");
  const { walletDispatch } = useContext(WalletContext);
  const { alertDispatch } = useContext(AlertContext);
  const navigation = useNavigation();

  Notification.setNotificationHandler({
    // configuring
    handleNotification: async () => {
      return {
        shouldPlaySound: true,
        shouldShowAlert: true,
      };
    },
  });

  //pops up after 10 sec's of snooze
  const AlarmSnooze = () => {
    Notification.addNotificationResponseReceivedListener((handleResponse) => {
      // console.log("clciked", handleResponse.notification);
      navigation.navigate("Result");
    });
    // const navigation = useNavigation();

    Notification.scheduleNotificationAsync({
      content: {
        title: "W A K M E",
        body: "wake up!!! its already late",
      },

      trigger: {
        seconds: 20,
      },
    });
  };

  //pops up when user presses on the snooze
  const NotificationHandler = (msg) => {
    Notification.addNotificationResponseReceivedListener((handleResponse) => {
      // console.log("clciked", handleResponse.notification);
      navigation.navigate("Result");
    });
    // const navigation = useNavigation();
    Notification.scheduleNotificationAsync({
      content: {
        title: "W A K M E",
        body: msg,
      },

      trigger: {
        seconds: 1,
      },
    });
  };

  return (
    <View style={(width, height)}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: Fonts.family.bold,
              fontSize: 80,
            }}
          >
            {moment().format("hh:mm")}
          </Text>
          <Text style={{ textAlign: "center", fontSize: Fonts.size.heading }}>
            {moment().format("MMMM Do YYYY")}
          </Text>
        </View>
        <View
          style={{
            height: 90,
            alignItems: "center",
            justifyContent: "space-between",

            flexDirection: "row",
            padding: 10,
          }}
        >
          <View
            style={{
              backgroundColor: colors.bgLight,
              height: 40,
              borderRadius: 50,
              width: 70,
              padding: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("success");
                NotificationHandler("Hurray!! you woke up");
              }}
            >
              <Text style={{ textAlign: "center" }}>Close</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: colors.secondary,
              height: 40,
              borderRadius: 50,
              width: 70,
              padding: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                //
                AlarmSnooze();
                NotificationHandler("you snoozed Alarm to 20 sec");
                navigation.navigate("Fail");
                walletDispatch({
                  type: REMOVE_MONEY,
                  payload: 20,
                });
              }}
            >
              <Text>Snooze</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: 30,
  },
});

export default Result;
