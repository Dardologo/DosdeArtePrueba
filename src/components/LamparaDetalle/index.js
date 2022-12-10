import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Image, Icon } from "@rneui/themed";
import { useLamps } from "../../hooks";
import { useEffect, useState } from "react";

const LamparaDetalle = ({ lampara }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const { setFavouriteLamp, getFavouritesLamps } = useLamps();

  useEffect(() => {
    getFavouritesLamps().then((res) => {
      const obj = res.find((el) => el.id === lampara.id);
    });
  }, [third]);

  return (
    <Card containerStyle={{ marginTop: 15 }}>
      <View style={styles.row}>
        <Card.Title>{lampara.nombre}</Card.Title>
        <TouchableOpacity onPress={() => setFavouriteLamp(lampara)}>
          <Icon
            containerStyle={{ textAlign: "left" }}
            name={`star${lampara.favorito ? "" : "-outline"}`}
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
});
