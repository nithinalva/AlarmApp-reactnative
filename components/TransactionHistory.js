import React, { useContext, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";

import Fonts from "../res/Fonts";
import colors from "../res/colors";
import AlertContext from "../context/store/AlertContext";

const TransactionHistory = () => {
  const { alertState } = useContext(AlertContext);
  console.log(alertState);

  return (
    <ScrollView style={{ height: 170 }}>
      {alertState.message?.map((msg, index) => (
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
            {msg.messge}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TransactionHistory;
