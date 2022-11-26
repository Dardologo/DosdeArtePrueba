import { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView, Button } from 'react-native';
import lamparasService from '../services/lamparas'
import Lampara from '../components/Lampara';

import HomeContext, {lamparas} from '../services/HomeContext';
import LamparaFlatList from '../components/LamparaFlatList';

export const Catalog = (navigation) => {

const [lamparas, setLamparas] = useState(lamparas)

useEffect(() =>{
  lamparasService.getLamparas().then(data => {
    setLamparas(data)
  })
} , [])


  return (
    <HomeContext.Provider value={ lamparas }>

    <ScrollView>
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}> Catalogo de Lamparas</Text>
       {
        <View>
        <LamparaFlatList lamparas={lamparas} navigation={navigation}/>     
        </View>  
       }
    </View>
      </SafeAreaView>

    </ScrollView>

    </HomeContext.Provider>

  )}


  const styles =StyleSheet.create({
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

