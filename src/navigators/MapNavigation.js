import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Map } from "../screens";
import { ROUTE_MAP } from "../constants/screens";

const MapStack = createNativeStackNavigator();

export const MapNavigation = () => {
  return (
    <MapStack.Navigator screenOptions={{ headerShown: false }}>
      <MapStack.Screen name={ROUTE_MAP} component={Map} />
    </MapStack.Navigator>
  );
};
