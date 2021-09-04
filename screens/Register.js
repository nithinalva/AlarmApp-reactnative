import React from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import colors from "../res/colors";
import Fonts from "../res/Fonts";

const { width, height } = Dimensions.get("screen");

const Register = () => {
  return (
    <View style={{ backgroundColor: `${colors.bgGrey}`, width, height }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.bgGrey} />

        <View style={styles.Header}>
          <View>
            <Text
              style={{
                color: `${colors.primary}`,
                fontSize: 25,
                fontFamily: Fonts.family.bold,
              }}
            >
              Create New Account
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: `${colors.textLight}`,
                textAlign: "center",
                fontFamily: Fonts.family.primary,
              }}
            >
              Please signup to continue
            </Text>
          </View>
        </View>
        <StatusBar />

        <View style={{ padding: 10 }}>
          <CustomTextInput name="Full name" />
          <CustomTextInput name="Email address" />
          <CustomTextInput name="Password" />
          <CustomTextInput name="Phone Number" />
          <Text style={{ fontSize: 12, color: `${colors.textGrey}` }}>
            By continuing, you agree to{" "}
            <Text style={{ color: `${colors.primary}` }}>wakeme's </Text>
            Terms of User and Privacy Policy
          </Text>
          <View style={{ alignItems: "center", marginBottom: 6 }}>
            <CustomButton title="Sign Up" navigateTo={"Alarm"} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  Header: {
    // backgroundColor: "#ffef",
    height: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
export default Register;
