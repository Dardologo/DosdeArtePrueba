//import "react-native-gesture-handler";
import React, { useEffect, useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AuthenticationContext, { authData } from "./src/services/AuthContext";
import AsyncStorage from "./src/services/AsyncStorage";
import {
  CatalogNavigation,
  HomeNavigation,
  MapNavigation,
  PublicNavigation,
} from "./src/navigators";

const BottomTabNavigator = createBottomTabNavigator();

export default function App() {
  //creo un estado de atutenticacion
  const [authenticationData, setauthenticationData] = useState(authData);

  // volver a descomentar para otros usuarios
  useEffect(
    useCallback(() => {
      AsyncStorage.getData("AuthData").then((data) => {
        if (data) {
          setauthenticationData(data);
        }
      });
    }),
    []
  );

  useEffect(
    useCallback(() => {
      setTimeout(() => {
        //Se ejecuta siempre al final
        if (authenticationData) {
          //Si tengo data lo guardo en AsyncStorage
          AsyncStorage.storeData("AuthData", authenticationData);
        } else {
          AsyncStorage.clearAll();
        }
      });

      //Si tengo que guardar favoritos deberia cambiar este metodo. No puedo hacer el clearAll? Porque me borra todo
      //lo de mi sesion
    }),
    [authenticationData]
  );

  return (
    <AuthenticationContext.Provider
      value={{ authenticationData, setauthenticationData }}
    >
      {/* Todo lo que esta dentro del stack estara disponible dentro del arbol de navegacion */}
      <NavigationContainer>
        {
          /* Si hay data de usuario me muestra el index, Home */
          authenticationData ? (
            <BottomTabNavigator.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "HOME") {
                    iconName = focused
                      ? "ios-information-circle"
                      : "ios-information-circle-outline";
                  } else if (route.name === "CATALOGO") {
                    iconName = "list";
                  } else if (route.name === "SUCURSALES") {
                    iconName = "map-outline";
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <BottomTabNavigator.Screen
                name="HOME"
                component={HomeNavigation}
              />
              <BottomTabNavigator.Screen
                name="SUCURSALES"
                component={MapNavigation}
              />
              <BottomTabNavigator.Screen
                name="CATALOGO"
                component={CatalogNavigation}
              />
            </BottomTabNavigator.Navigator>
          ) : (
            <PublicNavigation/>
          )
        }
      </NavigationContainer>
    </AuthenticationContext.Provider>
  );
}
