//import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {useEffect, useState, useCallback, useContext } from "react";
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { Catalog } from './src/screens/Catalog';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthenticationContext,{ authData } from "./src/services/AuthContext";
import Settings from "./src/screens/Settings";
import Details from "./src/screens/Details"
import AsyncStorage from './src/services/AsyncStorage';


const HomeStack = createNativeStackNavigator();

const HomeNavigation = ()=> {
  const BottonTabNavigator = createBottomTabNavigator()
     return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home vista" component={Home} />
        <HomeStack.Screen name="Settings" component={Settings} />
        <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>

  ); 
}
const CatalogStack = createNativeStackNavigator();

const CatalogNavitagion = ()=> {
     return (
      <CatalogStack.Navigator>
        <CatalogStack.Screen name="Catalogo" component={Catalog} />
      </CatalogStack.Navigator>
    
  ); 
}




export default function App() {
  //creo un estado de atutenticacion
  const [authenticationData, setauthenticationData] = useState(authData);
  const BottomTabNavigator = createBottomTabNavigator()

  useEffect(useCallback(() => {
    // console.log("Aqui tengo que verificar si existe data en la cache del dispositivo");
    AsyncStorage.getData('AuthData')
      .then(data => {
        // console.log("Encontro data???", data);
        if (data) {
          setAuthenticationData(data)
        }
      })
  }), [])

  useEffect(useCallback(() => {
    setTimeout(() => {
      if (authenticationData) {
        AsyncStorage.storeData('AuthData', authenticationData)
      } else {
        AsyncStorage.clearAll()
      }
    });



  }), [authenticationData])

 return (
    <AuthenticationContext.Provider value={{authenticationData, setauthenticationData}}>
    
        {/* Todo lo que esta dentro del stack estara disponible dentro del arbol de navegacion */}
        <NavigationContainer>
        {/* Si hay data de usuario me muestra el index, Home */
          

        authenticationData ? 

        <BottomTabNavigator.Navigator screenOptions={{ headerShown: false }}>
            <BottomTabNavigator.Screen name="Home" component={HomeNavigation} />
            <BottomTabNavigator.Screen name="Catalogo" component={CatalogNavitagion} />
        </BottomTabNavigator.Navigator>
         : 
          /* Si no hay data de usuario me muestra el Login */
         
         <Login />

        } 
        </NavigationContainer> 
     
    </AuthenticationContext.Provider>
    
  );
}




     