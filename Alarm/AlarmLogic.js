import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Notification from "expo-notifications";
import * as Permission from "expo-permissions";
import { useSelector } from "react-redux";
import moment from "moment";
import { selectActiveTime } from "../reducers/TimeSlice";
import { useNavigation } from "@react-navigation/native";

Notification.setNotificationHandler({
  // configuring
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});

export default function AlarmLogic() {
  const navigation = useNavigation();
  const data = useSelector(selectActiveTime);

  useEffect(() => {
    handleNotification();
    Notification.addNotificationResponseReceivedListener((handleResponse) => {
      console.log("clciked", handleResponse.notification);
      navigation.navigate("Result");
    });
  }, [data]);

  const handleNotification = () => {
    const date = new Date();

    var Today = moment(date); //now

    data?.map(
      ({ status, Alarm }) =>
        status == true &&
        Notification.scheduleNotificationAsync({
          content: {
            title: "Wakey wakkey its time for school",
            body: "This is my local notification",
          },

          trigger: {
            seconds: moment(Alarm).diff(Today, "seconds"),
          },
        })
    );
  };

  return <></>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
