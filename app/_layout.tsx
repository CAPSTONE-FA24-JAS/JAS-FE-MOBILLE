// app/_layout.tsx

import TimerProvider from "@/context/TimerContext";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "@/constants/Colors";
import CustomHeader from "@/components/CustomHeader";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "@/redux/store";
import Login from "./(tabs)/login";

const Drawer = createDrawerNavigator();
const NativeStack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

// This function should be within the Provider
function MainNavigator() {
  // Check if the user is authenticated inside a component wrapped by the Provider
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  console.log("isAuthenticated", isAuthenticated);

  function MyDrawer() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          header: ({ route }) => {
            const routeName = route.name;
            const title =
              routeName === "home-screen"
                ? "Home"
                : routeName === "list-dish"
                ? "Menu"
                : routeName === "history-order"
                ? "Lịch sử đặt món"
                : routeName === "feedback"
                ? "Đánh giá"
                : routeName === "setting"
                ? "Cài đặt"
                : "Lịch sử đặt món"; // Fallback title if route doesn't match
            return <CustomHeader title={title} />;
          },
          drawerActiveTintColor: Colors.primary,
        }}
      >
        <Drawer.Screen
          name="home-screen"
          component={require("./(tabs)/home-screen").default}
          options={{
            drawerLabel: "HOME",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="flower-tulip"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="list-dish"
          component={require("./(tabs)/list-dish").default}
          options={{
            drawerLabel: "MENU",
            drawerIcon: ({ color }) => (
              <Entypo name="open-book" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="history-order"
          component={require("./(tabs)/history-order").default}
          options={{
            drawerLabel: "LỊCH SỬ ĐẶT MÓN",
            drawerIcon: ({ color }) => (
              <MaterialCommunityIcons name="history" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="feedback"
          component={require("./(tabs)/feedback").default}
          options={{
            drawerLabel: "ĐÁNH GIÁ",
            drawerIcon: ({ color }) => (
              <Entypo name="star" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="setting"
          component={require("./(tabs)/setting").default}
          options={{
            drawerLabel: "CÀI ĐẶT",
            drawerIcon: ({ color }) => (
              <Entypo name="cog" size={24} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <SafeAreaProvider>
      {isAuthenticated ? (
        <TimerProvider>
          <NativeStack.Navigator>
            {/* Always render the index screen first */}
            <NativeStack.Screen
              name="index"
              component={require("./index").default}
              options={{ headerShown: false }}
            />

            <NativeStack.Screen
              name="(tabs)"
              component={MyDrawer}
              options={{ headerShown: false }}
            />
          </NativeStack.Navigator>
        </TimerProvider>
      ) : (
        <Login />
      )}
    </SafeAreaProvider>
  );
}

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Mono": require("../assets/fonts/RobotoMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
