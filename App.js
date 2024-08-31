import React from "react";
import { View, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {
  return (
    <View>
      <Text class name="text-center text-4xl text-red-500 font-semibold">
        Hello, React Native! hihi
      </Text>
    </View>
  );
};

export default App;
