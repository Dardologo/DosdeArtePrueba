import { FlatList, Text, TouchableOpacity } from 'react-native';
import Lampara from '../../components/Lampara';

export default function LamparaFlatList({ lamparas , navigation}) {

console.log(lamparas);

  const renderLampara = ({ item }) => {
    console.log(item.id);
    return (
        <TouchableOpacity
        onPress={() => navigation.navigate('Details', { id: item.id}) }
            >
            <Lampara lamparas={item}/> 
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