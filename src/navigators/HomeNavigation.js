import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Details, Favourites, Home, Map, Settings } from "../screens";
import {
  ROUTE_FAVOURITES_LAMPS,
  ROUTE_HOME,
  ROUTE_LAMP_DETAIL,
  ROUTE_MAP,
  ROUTE_SETTINGS,
} from "../constants/screens";

const HomeStack = createNativeStackNavigator();

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name={ROUTE_HOME} component={Home} />
      <HomeStack.Screen name={ROUTE_SETTINGS} component={Settings} />
      <HomeStack.Screen name={ROUTE_LAMP_DETAIL} component={Details} />
      <HomeStack.Screen name={ROUTE_FAVOURITES_LAMPS} component={Favourites} />
      <HomeStack.Screen name={ROUTE_MAP} component={Map} />
    </HomeStack.Navigator>
  );
};
