import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView, Button } from 'react-native';
import lamparas from '../services/lamparas'
import favoritos from '../services/favoritos';
import Lampara from '../components/Lampara';
import Favorito from '../components/Favorito/favorito';
import Favourites from './Favourites'

console.log(lamparas);

export const Catalog = (navigation) => {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}> Catalogo de Lamparas</Text>
       {
        lamparas.map(lamp => <Lampara lamp={lamp}/>)        
       }
    </View>
      </SafeAreaView>
    <View>
    <View>
      <Text style={styles.title}> Favoritos</Text>
       {
        favoritos.map(fav => <Favorito fav={fav}/>)        
       }
    </View>   
    <Button
          title= 'Favoritos'
          onPress={() => navigation.navigate("Favourites")}
          />
    </View>
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