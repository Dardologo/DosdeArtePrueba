import { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView, Button } from 'react-native';
import lamparasService from '../services/lamparas'
import LamparaFlatList from '../components/LamparaFlatList';
import AsyncStorage from '../services/AsyncStorage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Catalog = ({ navigation }) => {

  const [lamparas, setLamparas] = useState([])

  useEffect(() => {
    lamparasService.getLamparas().then(data => {
      setLamparas(data)
    })
  }, [])

  useEffect(() => {
    if(lamparas.length > 0){
      console.log('ESTAMOS ACA');
      AsyncStorage.storeData('MisLamparas', 'hola')

    }

  }, [lamparas])


  return (


    <View>
      <TouchableOpacity
      onPress={()=>{
        AsyncStorage.getData('MisLamparas').then(
          res => console.log(res)
        )
      }}>

      <Text style={styles.title}> Catalogo de Lamparas</Text>
        
      </TouchableOpacity>
      {
        <View>
          <LamparaFlatList lamparas={lamparas} navigation={navigation} />
        </View>
      }
    </View>


  )
}


const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 30

  },
  title: {
    fontSize: 20,
    alignContent: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center'

  }
});

