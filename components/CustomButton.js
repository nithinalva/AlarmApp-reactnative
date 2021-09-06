import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../res/colors";
import { useNavigation } from "@react-navigation/native";
import Fonts from "../res/Fonts";

const CustomButton = ({ title, navigateTo, action }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.Button}
      onPress={() => (navigateTo ? navigation.navigate(navigateTo) : action)}
    >
      <Text style={styles.text}>{title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: `${colors.primary}`,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: "90%",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily: Fonts.family.bold,
  },
});

export default CustomButton;
