import React from 'react'
import { Button, SafeAreaView, View, StyleSheet,Image, TouchableOpacity,Text } from "react-native"
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from "react";
import { color } from '@rneui/base';
//import { Text } from 'react-native'

const Login = () => {

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '220872438649-tjvp18a5kqhhrlm62i5m0b7onomm2jtf.apps.googleusercontent.com'
    
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log("authebtication", authentication)
    }
  }, [response]);

 
  return (   
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
            promptAsync()
        }}
    >
        <View  style={styles.container}>
          <Text style={styles.title}>
            Bienvenidos a Dos De Arte
          </Text>
            
             <Image source={require('../../assets/btn_google_signin_light_normal_web.png')} />
             
        </View>
      </TouchableOpacity>

      </SafeAreaView>
    
     )
}

const styles =StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    alignContent: 'center',
    justifyContent: 'center',
    color: 'green'
}
});
 
export default Login