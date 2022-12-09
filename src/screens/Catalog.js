import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import LamparaFlatList from "../components/LamparaFlatList";
import { useLamps } from "../hooks/useLamps";

export const Catalog = ({ navigation }) => {
  const [allMyLamps, setallMyLamps] = useState([]);
  const { getLamps } = useLamps();

  useEffect(() => {
    getLamps().then(setallMyLamps);
  }, []);

  return (
    <View>
      <Text style={styles.title}> Catalogo de Lamparas</Text>
      <View>
        <LamparaFlatList lamparas={allMyLamps} navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    alignContent: "center",
    marginTop: 5,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
});