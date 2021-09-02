import React from "react";
import { View, Text, StatusBar, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import colors from "../res/colors";

const Register = () => {
  return (
    <View style={{ backgroundColor: `${colors.bgGrey}`, height: "100%" }}>
      <StatusBar />

      <View style={styles.Header}>
        <Text
          style={{
            color: `${colors.primary}`,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Create New Account
        </Text>
        <Text style={{ fontSize: 20, color: `${colors.textLight}` }}>
          Please signup to continue
        </Text>
      </View>

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
    </View>
  );
};
const styles = StyleSheet.create({
  Header: {
    // backgroundColor: "#ffef",
    height: 120,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    marginTop: 20,
  },
});
export default Register;
