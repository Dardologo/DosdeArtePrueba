import { useEffect, useState } from "react";
import { Button, View } from "react-native"
import Lampara from "../../components/Lampara"
import lamparasService from "../../services/lamparas";
import styles from "./styles";

const Details = ({ id }) => {
    

    const [lamparas, setLamparas] = useState()

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
                
                <Lampara lamparas={lamparas} showAll={true} />
                
            }
        </View>
    )
}

export default Details