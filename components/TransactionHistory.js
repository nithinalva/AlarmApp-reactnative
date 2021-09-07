import React from "react";
import { ScrollView, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { Alerts } from "../reducers/WalletSlice";
import Fonts from "../res/Fonts";
import colors from "../res/colors";

const TransactionHistory = () => {
  const alert = useSelector(Alerts);
  return (
    <ScrollView style={{ height: 170 }}>
      {alert?.map((msg, index) => (
        <View
          key={index}
          style={{
            height: 50,
            backgroundColor: "#ffff",
            borderRadius: 5,
            marginBottom: 5,
            padding: 10,
          }}
        >
          <Text
            style={{
              fontFamily: Fonts.family.primary,
              fontSize: Fonts.size.tiny,
              color: colors.textGrey,
            }}
          >
            {msg}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TransactionHistory;
