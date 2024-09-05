import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import CustomHeader from "@/components/CustomHeader";

// Declare Drawer and Stack Navigators
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerLayout() {
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
      }}>
      <Drawer.Screen
        name="home-screen"
        component={require("./home-screen").default}
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
        component={require("./list-dish").default}
        options={{
          drawerLabel: "MENU",
          drawerIcon: ({ color }) => (
            <Entypo name="open-book" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="history-order"
        component={require("./history-order").default}
        options={{
          drawerLabel: "LỊCH SỬ ĐẶT MÓN",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="feedback"
        component={require("./feedback").default}
        options={{
          drawerLabel: "ĐÁNH GIÁ",
          drawerIcon: ({ color }) => (
            <Entypo name="star" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="setting"
        component={require("./setting").default}
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

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DrawerLayout"
        component={DrawerLayout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="bidding-auction"
        component={require("./bidding-auction").default}
        options={{
          title: "Auction Detail",
        }}
      />
      <Stack.Screen
        name="lot-detail"
        component={require("./lot-detail").default}
        options={{
          title: "Auction Detail",
        }}
      />
    </Stack.Navigator>
  );
}
