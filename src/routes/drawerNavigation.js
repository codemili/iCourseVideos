import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import TabRoutes, { OffTabsRoutes } from "./tabRoutes";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}} initialRouteName="HomeDrawer">
        <Drawer.Screen name="HomeDrawer" component={OffTabsRoutes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
