import {Card, Button, Icon } from '@rneui/themed';
import { View, Text, } from 'react-native';



const Lampara = ({ lamp }) => {
    return (
        <View>
            <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>FONTS </Card.Title>
            <Card.Divider />
            <Text h1>
              Hola
            </Text>
            <Text h2>
              h2 Heading
            </Text>
            <Text h3>
              h3 Heading
            </Text>
            <Text h4>
              h4 Heading
            </Text>
            <Text >Normal Text</Text>
          </Card>
          </View>
    )
}

export default Lampara

  