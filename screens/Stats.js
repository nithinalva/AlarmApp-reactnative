import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import Fonts from "../res/Fonts";

const Stats = () => {
  return (
    <Header>
      <View style={{ marginTop: 10 }}>
        {/* <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: Fonts.size.heading,
          }}
        >
          My Statstics
        </Text> */}
      </View>
      <Text>Stat Page</Text>
    </Header>
  );
};

export default Stats;
