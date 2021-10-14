
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/tabs/home";
const HomeRouteStack = createNativeStackNavigator();

const HomeStackRoutes = () => {
  return (
    <HomeRouteStack.Navigator
      initialRouteName="HomeDashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeRouteStack.Screen name="HomeDashboard" component={HomeScreen} />
    </HomeRouteStack.Navigator>
  );
};

export default HomeStackRoutes;
