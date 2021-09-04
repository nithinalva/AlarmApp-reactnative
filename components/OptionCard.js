import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../res/colors";
import Fonts from "../res/Fonts";

const OptionCard = ({ icon, text }) => {
  return (
    <View
      style={{
        height: 100,
        flex: 1,
        backgroundColor: "#fff",

        borderRadius: 10,
        margin: 5,
        alignItems: "center",

        justifyContent: "center",
        padding: 10,
      }}
    >
      <Icon size={40} color={colors.primary} name={icon} />
      <Text style={{ textAlign: "center", fontFamily: Fonts.family.primary }}>
        {text}
      </Text>
    </View>
  );
};

export default OptionCard;
