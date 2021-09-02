import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import colors from "../res/colors";
import { auto } from "async";
import Logo from "./Logo";
import CustomButon from "./CustomButton";

const Slider = ({ navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [sliderState, setSliderState] = useState({ currentPage: 0 });

  const setSliderPage = (event = any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <>
      <StatusBar />
      <Logo />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#fff", height: "100%" }}
      >
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={20}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }}
        >
          <View style={{ width, height }}>
            <View style={styles.Wrapper}>
              <Text style={styles.Captions}>
                Stop Snoring and Start Working!
              </Text>
            </View>
            <Image
              source={require("../res/images/Card1.jpg")}
              style={styles.Banner}
            ></Image>
          </View>

          <View style={{ width, height }}>
            <View style={styles.Wrapper}>
              <Text style={styles.Captions}>Setup Your Work Alaram</Text>
              <Text style={{ fontSize: 25, lineHeight: 50 }}>
                If you snooze it, you pay it
              </Text>
            </View>
            <Image
              source={require("../res/images/Card2.jpg")}
              style={styles.Banner}
            ></Image>
          </View>

          <View style={{ width, height, alignItems: "center" }}>
            <View style={styles.Wrapper}>
              <Text style={styles.Captions}>Wakeup!! Lets Get Started!!</Text>
            </View>
            <Image source={require("../res/images/alaram.gif")} />
            <CustomButon title="Lets Get Started" navigateTo={"Register"} />
            <Text>
              Already having a account?{" "}
              <Text style={{ color: `${colors.primary}` }}>SignIn </Text>here.
            </Text>
          </View>
        </ScrollView>
        {/* <Button
          title="Get Started"
          color={colors.primary}
          borderRadius={50}
          size={15}
        /> */}
      </SafeAreaView>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(3).keys()).map((key, index) => (
          <View
            key={index}
            style={[
              styles.paginationDots,
              { opacity: pageIndex === index ? 1 : 0.5 },
            ]}
            key={index}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  Banner: {
    // height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: "100%",
    height: "60%",
  },
  Wrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    padding: 20,
    textAlign: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },

  paginationWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#ffff",
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#0898A0",
    marginLeft: 10,
  },

  Captions: {
    fontSize: 30,

    textAlign: "center",
  },
});

export default Slider;
