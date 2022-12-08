import { useEffect, useState } from "react";
import { Button, View, StyleSheet } from "react-native"

import lamparasService from "../services/lamparas";
import LamparaDetalle from "../components/LamparaDetalle"


const Details = ({ route }) => {
    const [lampara, setLampara] = useState()
    const { id } = route.params || {}
    console.log({id, route});





    /*const lamparaEncontrada = lamparasService.getLampara(id)
    setLamparas(lamparaEncontrada)*/

    useEffect(() => {
        
            lamparasService.getLampara(id)
    
                .then(setLampara)

    }, [id])





    return (
        <View style={styles.container}>
            {
                lampara ?
                    <LamparaDetalle lampara={lampara} showAll={true} />
                    :
                    null
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