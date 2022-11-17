import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import lamparas from '../services/lamparas'
import imagenes from '../../assets'
import Lampara from '../components/Lampara';

console.log(lamparas);

export const Catalog = () => {
  return (
    <ScrollView>
    <View style = {styles.container}>
      <Text style={styles.container}> Catalogo de Lamparas</Text>
       {
        lamparas.map(lamp => <Lampara lamp={lamp}/>)
       }
    </View>
    </ScrollView>

  )}


  const styles =StyleSheet.create({
    container:
    {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });