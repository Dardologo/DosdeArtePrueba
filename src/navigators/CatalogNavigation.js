import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ROUTE_LAMP_CATALOG } from "../constants/screens";
import { Catalog } from "../screens";

const CatalogStack = createNativeStackNavigator();

export const CatalogNavigation = () => {
  return (
    <CatalogStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CatalogStack.Screen name={ROUTE_LAMP_CATALOG} component={Catalog} />
    </CatalogStack.Navigator>
  );
};
