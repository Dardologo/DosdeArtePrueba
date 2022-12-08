import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Image, Button, Icon } from '@rneui/themed';



const LamparaDetalle = ({ lampara }) => {
    return (
        <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>
              <Icon containerStyle={{ textAlign: 'left' }}
                name={'star-outline'}
                onPress={() => console.log('apretando sobre la estrella')} />
                {lampara.nombre} 
            </Card.Title>
            <Card.Divider />
            <Image
                style={{width:"100%",height:100}}
                resizeMode="contain"
                source={{uri: lampara.imagen}}
                />
            <Text h1>
              {lampara.precio}
            </Text>
            <Text h2>
              {lampara.descripcion}
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