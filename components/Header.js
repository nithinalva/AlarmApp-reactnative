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
import Fonts from "../res/Fonts";

const Header = (props) => {
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <View style={styles.Header}>{props.children}</View>
      <SafeAreaView></SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: 80,
    backgroundColor: `${colors.primary}`,

    padding: 20,
  },
});

export default Header;
