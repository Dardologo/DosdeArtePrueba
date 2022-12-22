import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ROUTE_LAMP_CATALOG, ROUTE_LAMP_DETAIL, ROUTE_MAP } from "../constants/screens";
import { Catalog, Details, Map } from "../screens";

const CatalogStack = createNativeStackNavigator();

export const CatalogNavigation = () => {
  return (
    <CatalogStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CatalogStack.Screen name={ROUTE_LAMP_CATALOG} component={Catalog} />
      <CatalogStack.Screen name={ROUTE_LAMP_DETAIL} component={Details} />
      <CatalogStack.Screen name={ROUTE_MAP} component={Map} />
    </CatalogStack.Navigator>
  );
};
