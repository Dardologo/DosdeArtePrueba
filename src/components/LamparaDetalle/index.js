import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Image, Button, Icon } from '@rneui/themed';



const LamparaDetalle = ({ lamparas }) => {
    return (
        <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>
              <Icon containerStyle={{ textAlign: 'left' }}
                name={'star-outline'}
                onClick={() => {console.log('apretando sobre la estrella');}} />
                {lamparas.nombre} 
            </Card.Title>
            <Card.Divider />
            <Image
                style={{width:"100%",height:100}}
                resizeMode="contain"
                source={{uri: lamparas.imagen}}
                />
            <Text h1>
              {lamparas.precio}
            </Text>
            <Text h2>
              {lamparas.descripcion}
            </Text>
          </Card>
    )
}

export default LamparaDetalle


const styles =StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  icon:
  {
    textAlign: 'left'
  }
});