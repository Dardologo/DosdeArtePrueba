import { useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import Lampara from "../../components/Lampara";
import { ROUTE_LAMP_DETAIL } from "../../constants/screens";

export default function LamparaFlatList({ lamparas, navigation }) {
  const renderLampara = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTE_LAMP_DETAIL, { id: item.id, navigation} )}
      >
        <Lampara lamparas={item} showAll={false} />
      </TouchableOpacity>
    );
  };

  return <FlatList keyExtractor={(item, i) => i} data={lamparas} renderItem={renderLampara} />;
}
