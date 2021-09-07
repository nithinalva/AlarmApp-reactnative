import * as Notification from "expo-notifications";
import { SnoozeNotificaiton } from "./SnoozeNotification";
import { useDispatch } from "react-redux";
import { debitMoney } from "../reducers/WalletSlice";
export const NotificationHandler = (msg) => {
  const dispatch = useDispatch();
  dispatch(debitMoney);
  Notification.setNotificationHandler({
    // configuring
    handleNotification: async () => {
      return {
        shouldPlaySound: true,
        shouldShowAlert: true,
      };
    },
  });

  Notification.scheduleNotificationAsync({
    content: {
      title: "W A K M E",
      body: msg,
    },

    trigger: {
      seconds: 5,
    },
  });
};
