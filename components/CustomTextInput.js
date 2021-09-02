import React from "react";
import { Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";
const CustomTextInput = ({ name }) => {
  return (
    <>
      <Text style={{ fontWeight: "bold" }}>{name}</Text>
      <TextInput placeholder={name} style={styles.Input} />
    </>
  );
};

const styles = StyleSheet.create({
  Input: {
    width: "100%",
    borderColor: "gray",
    height: 40,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
  },
});
export default CustomTextInput;
