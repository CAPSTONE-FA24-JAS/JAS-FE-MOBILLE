import React, { useState } from "react";
import { View, Text, TextInput, Switch } from "react-native";

const StepContent2: React.FC = () => {
  const [isMetric, setIsMetric] = useState(true); // true for CM, false for IN

  const toggleSwitch = () => setIsMetric((previousState) => !previousState);
  return (
    <View>
      <Text className="text-lg font-semibold">Description</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-2 my-4"
        placeholder="Enter here..."
      />

      <Text className="text-lg font-semibold">Dimensions</Text>
      {/* Toggle for IN/CM */}
      <View className="flex-row  items-center my-4">
        {/* IN Text */}
        <Text
          className={`text-lg mr-6 ${
            !isMetric ? "font-bold text-black" : "text-gray-400"
          }`}
        >
          IN
        </Text>

        {/* Switch */}
        <Switch
          trackColor={{ false: "#D1D5DB", true: "#60A5FA" }} // Light gray when off, blue when on
          thumbColor={isMetric ? "#34D399" : "#f4f3f4"} // Thumb color: green for CM, default for IN
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isMetric}
          style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} // Make the toggle bigger
        />

        {/* CM Text */}
        <Text
          className={`text-lg ml-4 ${
            isMetric ? "font-bold text-black" : "text-gray-400"
          }`}
        >
          CM
        </Text>
      </View>
      <View className="flex-row justify-between items-center my-4 w-full">
        <Text className="text-lg w-[20%]">Height</Text>
        <TextInput
          className="border border-gray-300 w-[80%] rounded-md p-2"
          placeholder="Enter height..."
        />
      </View>
      <View className="flex-row justify-between items-center my-4">
        <Text className="text-lg w-[20%]">Width</Text>
        <TextInput
          className="border border-gray-300 rounded-md p-2 w-[80%]"
          placeholder="Enter width..."
        />
      </View>
      <View className="flex-row justify-between items-center my-4">
        <Text className="text-lg w-[20%]">Depth</Text>
        <TextInput
          className="border border-gray-300 w-[80%] rounded-md p-2"
          placeholder="Enter depth..."
        />
      </View>
      <View className="my-4">
        <Text className="text-lg w-[20%] font-bold mb-4">Contact</Text>
        <View className="w-full">
          <TextInput
            className="border border-gray-300 w-full rounded-md p-2"
            placeholder="Enter email..."
          />
          <Text className="text-sm mt-2 text-gray-400 font-base">
            (Your email address based on your login)
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StepContent2;
