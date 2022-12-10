import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Catalog } from '../screens';

const CatalogStack = createNativeStackNavigator();

export const CatalogNavigation = () => {
  return (
    <CatalogStack.Navigator>
      <CatalogStack.Screen name="Catalogo" component={Catalog} />
    </CatalogStack.Navigator>
  );
};