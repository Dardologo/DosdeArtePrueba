import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const Catalog = () => {
  return (
    <Text style={styles.container}>Catalog: Aca van a estar todas las lamparas</Text>
    
  )}


  const styles =StyleSheet.create({
    container:
    {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });