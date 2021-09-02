import React from "react";
import { View, Text } from "react-native";
import colors from "../res/colors";

const Logo = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          marginTop: 30,
          fontSize: 30,
          color: colors.primary,
          fontWeight: "bold",
        }}
      >
        W A K E{" "}
      </Text>
      <Text
        style={{
          marginTop: 30,
          fontSize: 30,
          color: colors.secondary,
          fontWeight: "bold",
        }}
      >
        M E{" "}
      </Text>
    </View>
  );
};

export default Logo;
