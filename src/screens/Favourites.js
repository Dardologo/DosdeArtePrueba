
import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native';
import favoritos from '../services/favoritos';

export const Favourite = (navigation) => {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}> Favoritos</Text>
       {
        favoritos.map(lamp => <Favorito lamp={lamp}/>)
       }
    </View>
      </SafeAreaView>
    </ScrollView>

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