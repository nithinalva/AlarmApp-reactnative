import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
} from "react-native";
import Fonts from "../res/Fonts";
const { width, height } = Dimensions.get("screen");
const Failcase = () => {
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
            source={require("../res/images/snooze.jpg")}
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
            You've lost your money on snoozing
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

export default Failcase;