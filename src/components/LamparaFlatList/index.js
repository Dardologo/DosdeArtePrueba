import { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import Lampara from '../../components/Lampara';
import AsyncStorage from '../../services/AsyncStorage';

export default function LamparaFlatList({ lamparas, navigation }) {

  

  useEffect(() => {
    AsyncStorage.getData('MisLamparas').then(
      res => console.log(res)
    )
  }, [])

  const renderLampara = ({ item }) => {

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', { id: item.id })}
      >
        <Lampara lamparas={item} showAll={false} />
      </TouchableOpacity>

    )
  }

  return (
    <FlatList
      data={lamparas}
      renderItem={renderLampara}
    />


  );
}