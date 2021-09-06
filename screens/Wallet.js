import React, { useState } from "react";
import { Dimensions, SafeAreaView, View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Fonts from "../res/Fonts";
import Card from "../components/Card";
import colors from "../res/colors";

import OptionCard from "../components/OptionCard";
const { width, height } = Dimensions.get("window");

const Wallet = () => {
  return (
    <View style={{ width, height, marginTop: 20 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: Fonts.size.heading,
              }}
            >
              E-Wallet
            </Text>
          </View>
        </Header>

        <View style={{ padding: 10 }}>
          <View style={{ margin: 10 }}>
            <Text
              style={{
                fontFamily: Fonts.family.bold,
                fontSize: Fonts.size.heading,
              }}
            >
              Hey Nithin,
            </Text>
          </View>

          <View
            style={{
              height: 90,
              backgroundColor: colors.primary,
              marginBottom: 15,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Text style={{ color: "#fff" }}> Your balance </Text>
            <Text
              style={{
                fontSize: Fonts.size.heading,
                color: "#fff",
                fontFamily: Fonts.family.bold,
              }}
            >
              {" "}
              ₹ 190{" "}
            </Text>
          </View>

          <View
            style={{
              height: 120,
              flexDirection: "row",

              marginBottom: 10,
            }}
          >
            <OptionCard icon="wallet-outline" text="Add money" />
            <OptionCard icon="sync-sharp" text="Automatic add money" />
            <OptionCard icon="analytics" text="Detailed Statstics" />
          </View>

          <Card>
            <View style={styles.cashCard}>
              <View style={{ width: 310 }}>
                <Text style={{ fontFamily: Fonts.family.bold }}>
                  Set Minimum amount
                </Text>
                <Text
                  style={{ marginTop: 10, fontFamily: Fonts.family.primary }}
                >
                  ₹ 10
                </Text>
                <Text
                  style={{
                    fontSize: Fonts.size.tiny,
                    color: colors.textGrey,
                    lineHeight: 15,
                    fontFamily: Fonts.family.primary,
                  }}
                >
                  The selected amount get deducted from your wallet evertime you
                  snooze your alarmm
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontFamily: Fonts.family.primary,
                    color: colors.primary,
                  }}
                >
                  Edit
                </Text>
              </View>
            </View>
          </Card>

          <View style={styles.transactionCard}>
            <View>
              <Text style={{ fontFamily: Fonts.family.bold }}>
                Your Recent Transaction
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  cashCard: {
    padding: 20,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  transactionCard: {
    padding: 20,
  },
});

export default Wallet;
