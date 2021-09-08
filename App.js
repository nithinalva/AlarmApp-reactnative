import React, { createContext, useEffect, useReducer } from "react";
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

import AlarmLogic from "./Alarm/AlarmLogic";

import TestingScreen from "./screens/TestingScreen";
import Result from "./screens/Result";
import Fail from "./screens/Fail";
import Failcase from "./screens/Fail";
import Successcase from "./screens/Success";
import AlarmContext from "./context/store/AlarmContext";
import { TimeReducer } from "./context/reducers/TimeReducer";
import { WalletReducer } from "./context/reducers/WalletReducer";
import { AlertReducer } from "./context/reducers/AlertReducer";
import AlertContext from "./context/store/AlertContext";
import WalletContext from "./context/store/WalletContext";
const { Navigator, Screen } = createNativeStackNavigator();

export default function App(props) {
  // const handleNotification = () => {
  //   Notification.scheduleNotificationAsync({
  //     content: {
  //       title: "local notif",
  //       body: " this is my notificaions",
  //     },
  //     trigger: {
  //       seconds: 2,
  //     },
  //   });
  //   console.log("called");
  // };

  // useEffect(() => {
  //   handleNotification();
  // }, []);
  const [timeState, timeDispatch] = useReducer(TimeReducer, []);
  const [walletState, walletDispatch] = useReducer(WalletReducer, {
    money: 0,
  });
  const [alertState, alertDispatch] = useReducer(AlertReducer, {
    message: [],
  });

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AlertContext.Provider value={{ alertState, alertDispatch }}>
      <AlarmContext.Provider value={{ timeState, timeDispatch }}>
        <WalletContext.Provider value={{ walletState, walletDispatch }}>
          <NavigationContainer independent={true}>
            <AlarmLogic />
            <Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Home"
            >
              <Screen name="Home" component={Oboarding} />
              <Screen name="Fail" component={Failcase} />
              <Screen name="success" component={Successcase} />
              <Screen name="Register" component={Register} />
              <Screen name="Result" component={Result} />
              <Screen name="Alarm" component={Tab} />
            </Navigator>
          </NavigationContainer>
        </WalletContext.Provider>
      </AlarmContext.Provider>
    </AlertContext.Provider>
  );
}
