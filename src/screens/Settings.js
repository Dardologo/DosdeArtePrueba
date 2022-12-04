import { useContext, useEffect } from 'react';
import { Button, View, SafeAreaView} from 'react-native';
import { StyleSheet } from 'react-native';
import { AuthContext, authData } from '../services/AuthContext/index';



 const Settings =({ navigation, route }) => {
  //Queremos mostrar la info del usuario en settings y ya tenemos el objeto authenticationData
 // const {authenticationData} = useContext(AuthContext)

 console.log("Hola")

 // useEffect(() => {
  // console.log(authenticationData);
//}, [])
    return (
        
        <View style={styles.container}>
               < Button
               title='Logout'/>
        </View>
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
  export default Settings