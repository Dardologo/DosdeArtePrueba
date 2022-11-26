
import { Button, ScrollView, StyleSheet,SafeAreaView, Text, View } from 'react-native';
import Catalog from './Catalog'
import Oders from './Orders'



export default function Home ({navigation}) {
    return (
        <SafeAreaView style={styles.container}>

        <View>
            <Text>
                Bienvenidos a Dos De Arte
            </Text>
            <View> 
                <Button
                    title= 'Catalogo'
                    onPress={() => navigation.navigate("Catalogo")}
                />

                <Button
                    title= 'Favoritos'
                    onPress={() => navigation.navigate("Favourites")}
                />
             </View>
        </View>


        </SafeAreaView>
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


