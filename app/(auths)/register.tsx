import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [retypePasscode, setRetypePasscode] = useState("");

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !passcode || !retypePasscode) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    if (passcode !== retypePasscode) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    // Logic xử lý khi nhấn nút Submit
    Alert.alert(
      "Success",
      `Account created for ${firstName} ${lastName} with email ${email}`
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <ImageBackground
          source={require("../../assets/Vector-11.png")}
          className="relative justify-end w-full h-64"
        >
          <Text className="absolute mb-4 ml-4 text-3xl font-bold text-white top-20 left-32">
            Sparkles
          </Text>
          <Image
            className="absolute bottom-0 w-32 h-32 top-28 right-32"
            source={require("../../assets/Mask Group.png")}
          />
        </ImageBackground>
        <View className="flex-1 px-4 pt-6">
          <Text className="mb-4 text-xl font-bold">Sign up</Text>
          <Text className="mb-2 font-bold">Account Details</Text>
          <TextInput
            className="w-full h-10 px-2 mb-4 border border-gray-300 rounded"
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            className="w-full h-10 px-2 mb-4 border border-gray-300 rounded"
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            className="w-full h-10 px-2 mb-4 border border-gray-300 rounded"
            placeholder="E-Mail Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            className="w-full h-10 px-2 mb-1 border border-gray-300 rounded"
            placeholder="Passcode"
            value={passcode}
            onChangeText={setPasscode}
            secureTextEntry
          />
          <Text className="mb-4 text-xs text-gray-500">
            Must be at least 6 characters and has at least one number
          </Text>
          <TextInput
            className="w-full h-10 px-2 mb-4 border border-gray-300 rounded"
            placeholder="Re-type Passcode"
            value={retypePasscode}
            onChangeText={setRetypePasscode}
            secureTextEntry
          />
          <TouchableOpacity
            className="w-full py-3 mt-4 bg-blue-500 rounded"
            onPress={handleRegister}
          >
            <Text className="text-base font-bold text-center text-white">
              Create Account
            </Text>
          </TouchableOpacity>
          <Link href="/(auths)/login" asChild>
            <TouchableOpacity className="mt-4">
              <Text className="text-center text-blue-500">Log in instead</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
