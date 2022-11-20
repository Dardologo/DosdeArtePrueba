import {Card, Image, Button, Icon } from '@rneui/themed';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import favoritos from '../../services/favoritos';
import { useState } from 'react';

let Statefavorito = false

const agregarFavoritos = ({lamp}) => {
  favoritos.push(lamp)
  lamp.cambiarFavorito(lamp)
  console.log(favoritos);
  }

const EliminarFavoritos = ({lamp}) => {
    favoritos.pop(lamp)
    Statefavorito = false;
    console.log(favoritos);
    }



console.log(favoritos);

const Lampara = ({ lamp={lamp} }) => {
    return (
        <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>
              <Icon
                name={(!lamp.favoritos) ? 'star-outline' : 'star'}
                onPress={() => agregarFavoritos({lamp})} />
                {lamp.nombre} 
            </Card.Title>
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
});