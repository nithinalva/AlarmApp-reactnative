import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Notification from "expo-notifications";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import AlarmContext from "../context/store/AlarmContext";

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

  const { timeState } = useContext(AlarmContext);
  useEffect(() => {
    handleNotification();
    Notification.addNotificationResponseReceivedListener((handleResponse) => {
      console.log("clciked", handleResponse.notification);
      navigation.navigate("Result");
    });
  }, [timeState]);

  const handleNotification = () => {
    const date = new Date();

    var Today = moment(date); //now
    console.log("time", timeState);
    timeState?.map(
      ({ status, Alarm }) =>
        status === true &&
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
