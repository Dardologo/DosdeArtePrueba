
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Catalog from './Catalog'
import Oders from './Orders'
import Favourites from './Favourites'



export default function Home ({navigation}) {
    return (
        <View>
            <View> style={styles.container}
                <Button
                    title= 'Catalogo'
                    onPress={() => navigation.navigate("Catalog")}
                />
                <Button
                    title= 'Ordenes'
                    onPress={() => navigation.navigate("Orders")}
                />
                <Button
                    title= 'Favoritos'
                    onPress={() => navigation.navigate("Favourites")}
                />
             </View>
        </View>
    );
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


