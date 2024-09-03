// app/_layout.tsx
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "@/redux/store";
import { Text, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [loaded] = useFonts({
    "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </SafeAreaProvider>
    </Provider>
  );
}
