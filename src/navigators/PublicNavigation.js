import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login,  } from "../screens";

const PublicStack = createNativeStackNavigator();

export const PublicNavigation = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen name="Home vista" component={Login} />
    </PublicStack.Navigator>
  );
};
