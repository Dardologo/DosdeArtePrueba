import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Map, Details } from "../screens";
import { ROUTE_MAP, ROUTE_LAMP_DETAIL } from "../constants/screens";

const MapStack = createNativeStackNavigator();

export const MapNavigation = () => {
  return (
    <MapStack.Navigator screenOptions={{ headerShown: false }}>
      <MapStack.Screen name={ROUTE_MAP} component={Map} />
      <MapStack.Screen name={ROUTE_LAMP_DETAIL} component={Details} />
    </MapStack.Navigator>
  );
};
