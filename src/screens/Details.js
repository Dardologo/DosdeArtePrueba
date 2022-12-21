import { useEffect, useState } from "react";
import {  View, StyleSheet } from "react-native";

import LamparaDetalle from "../components/LamparaDetalle";
import { useLamps } from "../hooks";

const Details = ({ route, navigation }) => {
  const { id } = route.params;
  const { getLampById } = useLamps();
  const [lampara, setLampara] = useState();

  useEffect(() => {
    getLampById(id).then(setLampara);
  }, [getLampById, id]);

  return (
    <View style={styles.container}>
      {lampara ? <LamparaDetalle lampara={lampara} navigation={navigation} showAll={true} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 60,
    alignContent: "center",
  },
});

export default Details;