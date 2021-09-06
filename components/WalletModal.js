import React, { useState } from "react";
import Modal from "react-native-modal";
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import CustomButon from "./CustomButton";
import Icons from "react-native-vector-icons/";

import Fonts from "../res/Fonts";
import colors from "../res/colors";

const WalletModal = ({ visible, toggle }) => {
  const [wallet, setWallet] = useState("");
  const [PaymentStatus, setPaymentStatus] = useState(false);

  const walletInputHandler = (value) => {
    setWallet(value);
  };

  const walletSubmitHandler = (e) => {
    e.preventDefault;
    if (wallet === "") {
      console.warn("please input a field");
    } else {
      // toggle();
      setPaymentStatus(true);
    }
  };

  const PaymentSuccessHandler = () => {
    setPaymentStatus(false);
    setWallet("");

    toggle();
  };
  return (
    <>
      {/* //modal background */}
      <Modal
        isVisible={visible}
        animationIn="bounceInUp"
        animationOut="fadeOutDown"
      >
        {!PaymentStatus ? (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {/* actual modal that apears in the center */}

            <View
              style={{
                height: 200,
                width: 300,
                backgroundColor: "#fff",
                borderRadius: 10,
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View style={{ alignSelf: "flex-end" }}>
                <TouchableOpacity onPress={toggle}>
                  <Text>X</Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text
                  style={{
                    fontFamily: Fonts.family.primary,
                    fontSize: Fonts.size.heading,
                  }}
                >
                  Add Money to your wallet
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: Fonts.size.Xl,
                      borderColor: "grey",
                    }}
                  >
                    ₹{" "}
                  </Text>
                  <TextInput
                    placeholder="00.00"
                    style={styles.Input}
                    onChangeText={walletInputHandler}
                    value={wallet}
                  />
                </View>
              </View>

              <View
                style={{
                  width: "100%",

                  alignItems: "center",
                  alignSelf: "flex-end",
                }}
              >
                <Button
                  title="Add Money"
                  onPress={walletSubmitHandler}
                  color={colors.primary}
                ></Button>
              </View>
            </View>
          </View>
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {/* actual modal that apears in the center */}

            <View
              style={{
                height: 200,
                width: 300,
                backgroundColor: "#fff",
                borderRadius: 10,
                alignItems: "center",
                flexDirection: "column",

                padding: 10,
              }}
            >
              <View style={{ alignSelf: "flex-end" }}>
                <TouchableOpacity onPress={PaymentSuccessHandler}>
                  <Text>X</Text>
                </TouchableOpacity>
              </View>

              <View>
                <View style={{ alignItems: "center" }}>
                  <Image
                    source={require("../res/images/check.gif")}
                    style={{ width: 100, height: 100 }}
                  />
                </View>
                <Text
                  style={{
                    fontFamily: Fonts.family.primary,
                    fontSize: Fonts.size.heading,
                    textAlign: "center",
                  }}
                >
                  Success
                </Text>
                <Text style={{ fontFamily: Fonts.family.primary }}>
                  ₹{wallet} has been added to your wallet
                </Text>
              </View>
            </View>
          </View>
        )}
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  Input: {
    borderColor: "gray",
    height: 50,
    backgroundColor: "#fff",

    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    fontSize: Fonts.size.Xl,
  },
});

export default WalletModal;
