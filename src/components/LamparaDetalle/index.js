import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Image, Icon, Button } from "@rneui/themed";
import { ROUTE_MAP } from "../../constants/screens";

import { useLamps } from "../../hooks";

const LamparaDetalle = ({ lampara, navigation }) => {
  const { getFavouriteState, setFavouriteLamp } = useLamps();
  const [favouriteActive, setFavouriteActive] = useState();

  const setThisLampAsFavourite = async () => {
    await setFavouriteLamp(lampara);
    await getFavouriteState(lampara).then(setFavouriteActive);
  };

  useEffect(() => {
    getFavouriteState(lampara).then(setFavouriteActive);
  }, []);

  return (
    <Card containerStyle={{ marginTop: 15 }}>
      <View style={styles.row}>
        <Card.Title style={styles.title}>{lampara.nombre}</Card.Title>
        <TouchableOpacity onPress={setThisLampAsFavourite}>
          <Icon
            containerStyle={{ textAlign: "left" }}
            name={`star${favouriteActive ? "" : "-outline"}`}
          />
        </TouchableOpacity>
      </View>
      <Card.Divider />
      <Image
        style={{ width: "100%", height: 100 }}
        source={{ uri: lampara.imagen }}
        resizeMode="contain"
      />
      <Text h1>{lampara.precio}</Text>
      <Text h2>{lampara.descripcion}</Text>
      <Button containerStyle={styles.separator} title="Ver Sucursales" onPress={() => navigation.navigate(ROUTE_MAP)} />
    </Card>
  );
};

export default LamparaDetalle;

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between" },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  icon: {
    textAlign: "left",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 20,
    alignContent: "center",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
});
