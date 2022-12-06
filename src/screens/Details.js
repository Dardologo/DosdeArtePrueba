import { useEffect, useState } from "react";
import { Button, View, StyleSheet } from "react-native"
import LamparaDetalle from "../components/LamparaDetalle";
import lamparasService from "../services/lamparas";


const Details = ({ route }) => {

    const {id} = route.params || {}
    
    const [lamparas, setLamparas] = useState([])

    useEffect(() => {
        console.log("Tengo que ir a buscar la informacion detallada de este elemento", id);
        lamparasService.getLampara(id)
        .then(data => {
            console.log("Lampara a mostrar", data);
            setLamparas(data)
        })
    }, [])

    

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