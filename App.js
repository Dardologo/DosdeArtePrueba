//import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {useEffect, useState, useCallback, useContext } from "react";
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthenticationContext,{ authData } from "./src/services/AuthContext";
import Settings from "./src/screens/Settings";



const HomeNavigation = ()=> {
  const BottonTabNavigator = createBottomTabNavigator()
     return (
    <NavigationContainer>
      <BottonTabNavigator.Navigator>
       
        <BottonTabNavigator.Screen name="Home vista" component={Home} />
        <BottonTabNavigator.Screen name="Settings" component={Settings} />
        
      </BottonTabNavigator.Navigator>
    </NavigationContainer>
  ); 
}
export default function App() {
  //creo un estado de atutenticacion
  const [authenticationData, setauthenticationData] = useState(authData);
  const StackNavigator = createNativeStackNavigator();
 return (
    <AuthenticationContext.Provider value={{authenticationData, setauthenticationData}}>
    
        {/* Todo lo que esta dentro del stack estara disponible dentro del arbol de navegacion */}
        {/* Si hay data de usuario me muestra el index, Home */
          
        authenticationData ? 
         <HomeNavigation />
         : 
          /* Si no hay data de usuario me muestra el Login */
         
         <Login />
        } 
     
    </AuthenticationContext.Provider>
    
  );
}




     