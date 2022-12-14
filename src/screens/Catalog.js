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
    <View style={styles.container}>
      <LamparaFlatList lamparas={allMyLamps} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingVertical: 10,
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
