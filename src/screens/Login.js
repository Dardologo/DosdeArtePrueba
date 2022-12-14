import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";

import AuthService from "../services/login";
import AuthContext from "../services/AuthContext";

export const Login = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "220872438649-tjvp18a5kqhhrlm62i5m0b7onomm2jtf.apps.googleusercontent.com",
  });

  //Hay que gaurdarlo en el contexto global de atutentication y lo hacemos con un useContext(hook)
  const { setauthenticationData } = useContext(AuthContext);

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      // console.log("authentication", authentication)
      //acces token existe dentro del objeto authentication que me devuelve google. Esto es una promesa
      AuthService.login(authentication.accessToken).then((data) => {
        //Esta info hay que apsarla a un contexto
        console.log("vamos a guardar data del usuario", data);
        setauthenticationData(data);
      });

      /*AuthService.login(authentication.accessToken).then(data =>{
        console.log(data)
      })*/
    }
  }, [response]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          promptAsync();
        }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenidos a Dos De Arte</Text>
          <Text style={styles.title2}>Por favor ingresar con tu cuenta de Google</Text>

          <Image
            source={require("../../assets/btn_google_signin_light_normal_web.png")}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 25,
    alignContent: "center",
    marginTop: 20,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  title2: {
    fontSize: 20,
    alignContent: "center",
    marginTop: 20,
    justifyContent: "center",
    textAlign: "center",
  },
});
