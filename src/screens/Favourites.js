import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import LamparaFlatList from "../components/LamparaFlatList";
import { useLamps } from "../hooks/useLamps";

export const Favourites = ({ navigation }) => {
  const [allMyLamps, setallMyLamps] = useState([]);
  const { getFavouriteLamps } = useLamps();
  const focus = useIsFocused();

  useEffect(() => {
    console.log({ focus });
    getFavouriteLamps().then(setallMyLamps);


   
    
  }, [focus]);

  return (
    <View>
      <View>
        {allMyLamps.length > 0 ? (
          <LamparaFlatList lamparas={allMyLamps} navigation={navigation} />
        ) : (
          <Text style={styles.title}>No tienes lámparas favoritas</Text>
        )}
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
    marginTop: 50,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
});
