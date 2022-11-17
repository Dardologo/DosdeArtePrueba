import { CardImage } from '@rneui/base/dist/Card/Card.Image';
import {Card, Image, Button, Icon } from '@rneui/themed';
import { View, Text, StyleSheet} from 'react-native';

const Lampara = ({ lamp={lamp} }) => {
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