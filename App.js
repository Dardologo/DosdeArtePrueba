import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Catalog, Login, Orders } from "./src/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Orders" >
        <Stack.Screen  name="Login vista" component={Login} />
        <Stack.Screen name="Catalog vista" component={Catalog} />
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
