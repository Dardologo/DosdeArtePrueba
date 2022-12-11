import { Card, Image } from "@rneui/themed";
import { StyleSheet } from "react-native";


const Lampara = ({ lamparas }) => {
  return (
    <Card containerStyle={{ marginTop: 15 }}>
      <Card.Title>{lamparas.nombre}</Card.Title>
      <Card.Divider />
      <Image
        style={{ width: "100%", height: 100 }}
        resizeMode="contain"
        source={{ uri: lamparas.imagen }}
        onClick={() => {
          console.log("dandole a la imagen");
        }}
      />
    </Card>
  );
};

export default Lampara;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  icon: {
    textAlign: "left",
  },
});
