import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import "react-native-get-random-values";

import Card from "../components/Card";
import Header from "../components/Header";
import colors from "../res/colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TimeCard from "../components/TimeCard";
import { v4 as uuidv4 } from "uuid";

import Fonts from "../res/Fonts";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { addTime, selectTime } from "../reducers/TimeSlice";

const Alarm = () => {
  const { width, height } = Dimensions.get("window");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const dispatch = useDispatch();
  const timeData = useSelector(selectTime);
  console.log(timeData.time);

  const dateFormat = (data) => {
    console.log(data);

    const time = {
      id: uuidv4(),
      date: data.slice(0, 15),
      time: data.slice(16, 21),
      status: true,
    };

    dispatch(addTime(time));
  };

  return (
    <View style={{ width, height, marginTop: 20 }}>
      <Header>
        <View style={styles.container}>
          <Text style={styles.text}>Alarms</Text>
          <TouchableOpacity onPress={showDatePicker}>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              minimumDate={new Date()}
              onConfirm={(date) => {
                hideDatePicker();

                dateFormat(String(date));
              }}
              onCancel={hideDatePicker}
            />
            {/* <Text style={styles.text}>Add +</Text> */}
            <Icon size={40} color="#fff" name="add" />
          </TouchableOpacity>
        </View>
      </Header>

      <View style={{ marginTop: 10, padding: 10 }}>
        <Card>
          <Text
            style={{ width: 200, margin: 30, fontFamily: Fonts.family.bold }}
          >
            Missing your important work? set your alarm now,we will wake you up
            on time
          </Text>
          <Image
            source={require("../res/images/time.jpg")}
            style={{
              height: 115,
              width: 130,
              alignSelf: "flex-end",
            }}
          />
        </Card>
      </View>

      <View style={styles.TimeSlots}>
        <SafeAreaView>
          <ScrollView>
            {timeData.time.length > 0 ? (
              timeData.time.map((t, index) => (
                <TimeCard
                  time={t.time}
                  date={t.date}
                  status={t.status}
                  key={index}
                  id={t.id}
                />
              ))
            ) : (
              <View
                style={{
                  height: 200,
                  margin: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: Fonts.size.heading,
                    color: colors.textGrey,
                    fontWeight: "bold",
                  }}
                >
                  No Alarms set :(
                </Text>
              </View>
            )}
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },

  TimeSlots: {
    padding: 10,
    height: "60%",
  },
});

export default Alarm;
