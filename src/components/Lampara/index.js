import {Card, Image, Button, Icon } from '@rneui/themed';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';


const Lampara = ({ lamparas }) => {
    return (
        <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>
                {lamparas.nombre} 
            </Card.Title>
            <Card.Divider />
            <Image
                style={{width:"100%",height:100}}
                resizeMode="contain"
                source={{uri: lamparas.imagen}}
                onClick={() => {console.log('dandole a la imagen');}}
                />
            <Text h2>
              {lamparas.descripcion}
            </Text>
          </Card>

  
    )
}

export default Lampara


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