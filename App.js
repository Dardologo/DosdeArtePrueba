//import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {useEffect, useState, useCallback } from "react";
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import {Catalog} from './src/screens/Catalog';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from "react-native";
import Details from "./src/screens/Details/index";
import Lampara from "./src/components/Lampara";

export default function App() {
  //creo un estado de atutenticacion
  const [authenticationData, setauthenticationData] = useState(false);
  const StackNavigator = createNativeStackNavigator();
  const BottonTabNavigator = createBottomTabNavigator()



  return (
    <NavigationContainer>
      <StackNavigator.Navigator>

      

        {/* Todo lo que esta dentro del stack estara disponible dentro del arbol de navegacion */}
        {
          /* Si hay data de usuario me muestra el index, Home */
        authenticationData ? 
          <>
            <StackNavigator.Screen name="Home" component={Home}/>
            <StackNavigator.Screen name="Catalogo" component={Catalog}/>
            <StackNavigator.Screen name="Details" component={Details}/>
            <StackNavigator.Screen name="Lampara" component={Lampara}/>

          </>
         : 
          /* Si no hay data de usuario me muestra el Login */
          <StackNavigator.Screen name="Login" component={Login} />
        } 
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

 /*    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Orders" >
        <Stack.Screen  name="Login vista" component={Login} />
        <Stack.Screen name="Catalog vista" component={Catalog} />
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
  ); */


     