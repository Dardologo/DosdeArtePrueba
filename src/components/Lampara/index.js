import {Card, Image, Button, Icon } from '@rneui/themed';
import { View, Text,} from 'react-native';



const Lampara = ({ lamp={lamp} }) => {
    return (
        <View>
            <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>{lamp.nombre} </Card.Title>
            <Card.Divider />
            <Text h1>
              {lamp.precio}
            </Text>
            <Text h2>
              {lamp.descripcion}
            </Text>
            <Image
            source={require(lamp.imagen)}
            />
          </Card>
          </View>
    )
}

export default Lampara

  