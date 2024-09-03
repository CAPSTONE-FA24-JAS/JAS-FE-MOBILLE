// app/(auths)/register.tsx

import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { useRouter } from "expo-router";

const Register: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    // Giả sử đăng ký thành công
    Alert.alert("Success", "Registered successfully!");
    router.push("/(auths)/login"); // Điều hướng lại trang login sau khi đăng ký thành công
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 16, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={{ marginBottom: 16, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        secureTextEntry
        onChangeText={setConfirmPassword}
        style={{ marginBottom: 16, borderWidth: 1, padding: 8 }}
      />
      <TouchableOpacity
        onPress={handleRegister}
        style={{
          backgroundColor: "#4765F9",
          padding: 16,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
