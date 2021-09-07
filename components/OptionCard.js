import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Modal from "react-native-modal";
import colors from "../res/colors";
import Fonts from "../res/Fonts";
import WalletModal from "./WalletModal";

const OptionCard = ({ icon, text, walletModal }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log("pressed");
  };
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={walletModal && toggleModal}>
      <WalletModal visible={isModalVisible} toggle={toggleModal} />
      <View
        style={{
          height: 100,

          backgroundColor: "#fff",

          borderRadius: 10,
          margin: 5,
          alignItems: "center",

          justifyContent: "center",
          padding: 10,
        }}
      >
        <Icon size={40} color={colors.primary} name={icon} />
        <Text style={{ textAlign: "center", fontFamily: Fonts.family.primary }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default OptionCard;
