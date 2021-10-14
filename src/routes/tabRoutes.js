import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { heightToDp } from "../constants/responsive";
import MyAccountTab from "../screens/tabs/account";
import MyCourses from "../screens/tabs/courses";
import HomeStackRoutes from "./stackRoutes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlayerScreen from "../screens/player";


const Tab = createBottomTabNavigator();

export const TabRoutes =() => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: heightToDp("8"),
            paddingBottom: heightToDp("1"),
          },
          headerShown: false,
          headerStyle: {
            backgroundColor: "red",
            height: heightToDp("8"),
            paddingVertical: heightToDp("1"),
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "MyCourses") {
              iconName = focused ? "book-open" : "book-open";
            } else if (route.name === "MyAccount") {
              iconName = focused ? "user" : "user";
            }

            // You can return any component that you like here!
            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeStackRoutes} />
        <Tab.Screen name="MyCourses" component={MyCourses} />
        <Tab.Screen name="MyAccount" component={MyAccountTab} />
      </Tab.Navigator>
  );
}

const OffTabStack = createNativeStackNavigator();

export const OffTabsRoutes  = () => {
  return (
    <OffTabStack.Navigator
      initialRouteName="MainTabRoutes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <OffTabStack.Screen name="MainTabRoutes" component={TabRoutes} />
      <OffTabStack.Screen name="PlayerScreen" component={PlayerScreen} />
    </OffTabStack.Navigator>
  );
};