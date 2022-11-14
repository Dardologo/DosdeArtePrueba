import { Card } from '@rneui/base'
import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import lamparas from '../services/lamparas'
import Lampara from '../components/Lampara';

console.log(lamparas);

export const Catalog = () => {
  return (
    <ScrollView>
    <View style = {styles.container}>
      <Text style={styles.container}> Catalog: Aca van a estar todas las lamparas</Text>
       {
        lamparas.map(lamp => <Lampara lamp={lamp}/>)
       }
        <Lampara />
        <Lampara />
        <Lampara />
        <Lampara />
        <Lampara />
        <Lampara />
        <Lampara />
      
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