import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

// Define the types for navigation routes
type RootStackParamList = {
  ConsignStep: undefined;
};

const Consign: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View className="flex-1 bg-white">
      <View className="mx-4 h-full">
        <Text className=" my-6 text-center text-lg font-semibold">
          Consignment is a simple process that allows you to send us your
          valuable items for review. We can estimate its value and eventually
          offer it at one of our auctions!
        </Text>
        <View className="flex flex-row justify-center">
          <Image
            source={require("../../assets/consign/bg-consign.png")} // Replace with your logo path
            style={{ width: 400, height: 300, marginBottom: 20 }}
          />
        </View>
        <TouchableOpacity
          className="mt-10"
          onPress={() => navigation.navigate("ConsignStep")}
        >
          <View
            className="flex flex-row justify-center w-full items-center bg-blue-500 w-[200px] h-16 w-full rounded-lg"
            style={{ marginBottom: 20 }}
          >
            <Text className="text-white text-xl uppercase font-bold">
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Consign;
