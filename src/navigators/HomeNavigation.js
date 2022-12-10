import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Details, Home, Map, Settings } from "../screens";

const HomeStack = createNativeStackNavigator();

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home vista" component={Home} />
      <HomeStack.Screen name="Settings" component={Settings} />
      <HomeStack.Screen name="Details" component={Details} />
      <HomeStack.Screen name="Map" component={Map} />
    </HomeStack.Navigator>
  );
};
