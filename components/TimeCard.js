import React from "react";
import { useState } from "react";
import { View, Text, Switch } from "react-native";
import colors from "../res/colors";
import Fonts from "../res/Fonts";
import { useDispatch } from "react-redux";
import { updateStatus } from "../reducers/TimeSlice";
const TimeCard = (props) => {
  const [isEnabled, SetisEnabled] = useState(props.status);
  const dispatch = useDispatch();

  const toggle = () => {
    SetisEnabled(!isEnabled);

    dispatch(updateStatus(props.id));
  };

  return (
    <View
      style={{
        height: 90,
        backgroundColor: `${colors.bgGrey}`,

        justifyContent: "space-between",
        marginBottom: 5,
        borderBottomColor: "#000",
        flexDirection: "row",
        padding: 10,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: Fonts.size.Xl,
            lineHeight: 50,
            fontFamily: Fonts.family.bold,
            color: `${isEnabled ? colors.primary : "#000"}`,
          }}
        >
          {props.time}
        </Text>
        <Text style={{ fontFamily: Fonts.family.primary }}>{props.date}</Text>
      </View>

      <View style={{ padding: 20 }}>
        <Switch
          trackColor={{ false: "#767577", true: `${colors.primary}` }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggle}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default TimeCard;
