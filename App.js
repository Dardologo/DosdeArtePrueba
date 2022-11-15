//import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { Catalog, Login, Orders, Favourites } from "./src/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  //creo un estado de atutenticacion
  const [authenticationData, setauthenticationData] = useState(true);
  const StackNavigator = createNativeStackNavigator();



  return (
    <NavigationContainer>
      <StackNavigator.Navigator>

      

        {/* Todo lo que esta dentro del stack estara disponible dentro del arbol de navegacion */}
        {
          /* Si hay data de usuario me muestra el index, Home */
        authenticationData ? 
          <>
          <StackNavigator.Screen name="Catalogo" component={Catalog} />
           <StackNavigator.Screen name="Orders" component={Orders} />
            <StackNavigator.Screen name="Catalog" component={Favourites} options={
              {
                headerShown: false
              }
            } />
           
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

     