import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens";
import { ROUTE_HOME } from "../constants/screens";

const PublicStack = createNativeStackNavigator();

export const PublicNavigation = () => {
  return (
    <PublicStack.Navigator screenOptions={{ headerShown: false }}>
      <PublicStack.Screen name={ROUTE_HOME} component={Login} />
    </PublicStack.Navigator>
  );
};
