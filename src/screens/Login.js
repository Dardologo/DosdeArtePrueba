import React from 'react'
import { Button, SafeAreaView, View, StyleSheet } from "react-native"
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from "react";
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
    <SafeAreaView>
      <View>
    <Button
    title='Login con Google'
    onPress={()=>{
      promptAsync()
    }
    
    }
    />
    </View>
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
});
 
export default Login