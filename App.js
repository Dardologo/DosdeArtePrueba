import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenidos a DosdeArte! </Text>
      <Button
        title='Reserva tu lampara'
        onPress={()=> console.log("Toco el boton y me aparece en la terminal")}
      />
      <TouchableOpacity
       onPress={()=> console.log("Click on text via TouchableOpacity")}
      >
        <View>
          <Text> Seba chupa pingo </Text>
        </View>

      </TouchableOpacity>

      <TouchableOpacity
       onPress={()=> console.log("Click on text via TouchableOpacity")}
      >
        <View>
         <Image
         style={{
          width: 300,
          height: 300,
          resizeMode: 'contain'
        }}
         source={require('./assets/ParLamparas.png')}/>
        </View>

      </TouchableOpacity>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
