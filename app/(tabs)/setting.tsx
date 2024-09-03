import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice"; // Import the logout action
import { useRouter } from "expo-router"; // Import useRouter

const SettingScreen: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // Initialize useRouter for navigation

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    router.replace("/(auths)/login"); // Navigate to the login screen after logout
  };

  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingScreen;
