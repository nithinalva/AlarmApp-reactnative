import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Alert,
  BackHandler,
} from "react-native";

import Fonts from "../res/Fonts";
import { useNavigation } from "@react-navigation/core";
const { width, height } = Dimensions.get("screen");
const Successcase = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => navigation.navigate("Alarm") },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={{ width, height, backgroundColor: "#fff" }}>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: 400,
            justifyContent: "center",
            padding: 10,
            marginTop: 150,
          }}
        >
          <Image
            source={require("../res/images/success.jpg")}
            style={styles.banner}
          />
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: Fonts.size.Xl,
              fontFamily: Fonts.family.bold,
              margin: 10,
            }}
          >
            Kudos,you've saved your wallet today
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    alignSelf: "center",
    height: 350,
  },
});

export default Successcase;
