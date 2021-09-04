import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../res/colors";
const Card = (props) => {
  return <View style={styles.Card}>{props.children}</View>;
};

const styles = StyleSheet.create({
  Card: {
    height: 120,
    backgroundColor: `${colors.bgLight}`,
    borderRadius: 10,
    flexDirection: "row",

    justifyContent: "space-between",
  },
});

export default Card;
