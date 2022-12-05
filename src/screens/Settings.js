import { useContext, useEffect, Text } from 'react';
import { Button, View, SafeAreaView} from 'react-native';
import AuthContext from '../services/AuthContext';
import { Avatar, Divider } from '@rneui/themed';
import { StyleSheet } from 'react-native';





 const Settings =({ navigation, route }) => {
  //Queremos mostrar la info del usuario en settings y ya tenemos el objeto authenticationData
 const {authenticationData, setauthenticationData} = useContext(AuthContext)

 console.log("Hola")

  useEffect(() => {
   console.log(authenticationData);
}, [])
  const logout = () => {
    setauthenticationData(null)
  }
  /*  return (
        
        <View style={styles.container}>
           <Avatar
              size={64}
              rounded
              source={{uri : authenticationData.picture}}
            />
            <Divider />
               < Button
               title='Logout'/>
               onPress= {logout}
        </View>
    )*/
    return (<View>
     
    </View>)
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