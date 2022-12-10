import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Map } from '../screens';

const MapStack = createNativeStackNavigator();

export const MapNavigation = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="Map" component={Map} />
    </MapStack.Navigator>
  );
};