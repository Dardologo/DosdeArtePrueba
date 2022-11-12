import React from 'react'
import { Text, StyleSheet } from 'react-native'



export const Orders = () => {
  return (
    <Text style={styles.container}>Orders: Aca esta tu orden</Text>
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
});
