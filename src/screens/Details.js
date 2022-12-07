import { useEffect, useState } from "react";
import { Button, View, StyleSheet } from "react-native"
import LamparaDetalle from "../components/LamparaDetalle";
import lamparasService from "../services/lamparas";


const Details = ({ route }) => {

    const {id} = route.params || {}
    console.log("******************************",id)
    const [lamparas, setLamparas] = useState([])

    const lamparaEncontrada = lamparasService.getLampara(id)
    setLamparas(lamparaEncontrada)
    console.log("***********",lamparaEncontrada,"***************")
   console.log("+++++++++++++++++++",lamparas)
  /*  useEffect(() => {
        console.log("Tengo que ir a buscar la informacion detallada de este elemento", id);
        lamparasService.getLampara(id)

        .then(data => {

            console.log("Lampara a mostrar", data);
            setLamparas(data)
        })
    }, [])*/

    
    console.log("**************************",lamparas)
    return (
        <View style={styles.container}>
            {
                
                <LamparaDetalle lampara={lamparas} showAll={true} />
                
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 60,
        alignContent: 'center'
    }
});

export default Details