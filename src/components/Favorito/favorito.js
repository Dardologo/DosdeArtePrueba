
import React from 'react'
import {Card, Image, Button, Icon } from '@rneui/themed';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Favorito = ({ lamp={lamp} }) => {
    return (
        <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>{lamp.nombre} </Card.Title>
            <Card.Divider />
            <Image
                style={{width:"100%",height:100}}
                resizeMode="contain"
                source={{uri: lamp.imagen}}
                />
            <Text h1>
              {lamp.precio}
            </Text>
            <Text h2>
              {lamp.descripcion}
            </Text>
            <Card.Divider />
          </Card>
  
    )
}

export default Favorito


const styles =StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});