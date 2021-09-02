import React from "react";
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import colors from "../res/colors";

const Alarm = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <View style={{ width, height, marginTop: 20 }}>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <View style={styles.Header}>
        <Text>hii i am alaasrm</Text>
        <Text>Logo</Text>
      </View>
      <SafeAreaView></SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: 80,
    backgroundColor: `${colors.primary}`,

    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Alarm;
