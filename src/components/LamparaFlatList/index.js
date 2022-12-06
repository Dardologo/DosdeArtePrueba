import { FlatList, Text, TouchableOpacity } from 'react-native';
import Lampara from '../../components/Lampara';

export default function LamparaFlatList({ lamparas , navigation}) {


  const renderLampara = ({ item }) => {
   
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', { id:item.id})}
            >
            <Lampara lamparas={item} showAll={false}/> 
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