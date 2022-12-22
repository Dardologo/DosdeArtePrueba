import { useContext } from "react";
import { Divider } from "@rneui/base";
import AuthContext from "../services/AuthContext";
import {
  Button,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
} from "react-native";
import {
  ROUTE_FAVOURITES_LAMPS,
  ROUTE_LAMP_CATALOG,
  ROUTE_MAP,
  ROUTE_SETTINGS,
} from "../constants/screens";

export default function Home({ navigation }) {
  const { authenticationData, setauthenticationData } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Image
            style={{ width: "100%", height: 200 }}
            resizeMode="contain"
            source={{
              uri: "https://lh3.googleusercontent.com/fife/AAbDypAU-l-xvipy-Y64eSHaEv3-EAlRuzyBwrSCFugqnRcE2DYQ5kKtcmcHiBaBMbmY6L71CTYo6u64ynXe8wrNpD5c-UnOWs5ZbHJVE5EoVbXNq9ENVFxOPB2NtxAqMuSjbXICZsdrh_K2g-wkkdxd40vayhOnlGwW6tVcvBqhkF1WmzF8sWg_CxlRTt5jcGTE5PdanxaMX9ybPYFTrSzVDRmFniZYx-87kfkMl-1-fnTtf1fcL_kUILMdc8zaz6OISgtHxSncmD2OOOHk6zyleuezHzrK6fQ_jazfv0QLkxUxP8449DeHhjrGPqPzgR_zhHkHWPSIV18qhJThDyUsAU1rvl8z1LS2LK8TV0gKzRZ6Lod7RUiCsaoiWkixiuin2PiLkYtuWxCcDX85XorkPCbZaO3WV_I4pM1cdgoWvreO3NEN6FpC0HKo8E2xacO36BhRCo-TO3ajv1Gk-uHfdog186PYn26YjzfkMCYLdC7ECfl4i-IUo7T_nj93hLQEPT97_eu_cXP7H6MoZVb_CYu-Nx1Rg1ilheB9sDxwF_-p4gGqOC6SqbwoGic9AJgV8ZMToGKUjo49H_PPHTvYoAWMHvfhY7b9tHCrs_iu4sLKP7i5SyHlQTkWNmCegDV1bzJyR_0azw6zWHf93JcsZmkGitL22ttb6nHUvsyUNtWlRuTUuZM9Tl30P5opc6HE-PO_XEFraFkLsII0Bf4NNp4r-kYrEM9l4ea8PV_V4O4n4vNR5Ej47oSeeYrTX1PAOk19FFb2tMIm6V__eH0gZSPg7g4KFse_E6Q-lv81Be5a-PpV9I7z-8GxlCwGc10lQ5qrhzQRTJmwbigyb7g0_K_GpfRDAUrd1KldU3Ol1MJPNw2jKqcZ4-DYmzu9Im9B_Yf6mOzUBA34l_NIVwbsj7-u4KXeAN281JdKJ-tHqvrLPRxvwqzm16_Mco_w5AlNXrGptHFSQTJwVt5OxBWGbnAfvspXyQFTSWdWIGB48zs-w3NWPSoJiJPkIcpDhmd-Bm9HcuVCKqGnInxEuFkpWrPpCBjP1-DuUMw3ldF02bebdnI6WAiEZQUjhJUFzrNUtl8AGFTQQwdFtTaFAF4VwhDbI2iRPoT8CRmgbr_jzHXv_MMJpigQyRWYoPVBTCvBwab240wtW_1YLFaiqtHg9rFnLx6gxaYrruEHDDvOP8My7gWo0BH667W9bQS3HyqnBkHIy4KCZXwVRCPdUYRogguHI09L9ya5qZxmbJRiI6VLWUs-kdqL-2_9x9nH1i2cuDe0XV4saz_Buwk1uavoxCQo2Epmr1TTjbGEC2pPIspPQtyYXf5AITKfaTJgpSyGztdogOcLxg2kQt9RWxh9lZNtdPZvNoMksoubzyAR2cq-EFD2WqOOYMcSLrJL3udyUoJ2Ao64aXXT155qLdk-btU9ukTMXsSmWDLxG2rE7iRRuFKRXMXP6s7e8lvvRvX4GuLxG6zwSTEMaNRM4ETTdyOdjO8VZNADKsnOeMCq-m5kVdlmujucSCwSN0X8=w225-h214-p-k-nu",
            }}
          />
        </View>

        <Text style={styles.title}>Hola {authenticationData.given_name}</Text>
        <Text style={styles.title2}>Bienvenido a Dos De Arte!</Text>
        <Divider></Divider>
        <Text></Text>
        <View>
          <Button
            title="Mis Favoritos"
            onPress={() => navigation.navigate(ROUTE_FAVOURITES_LAMPS)}
          />
          <Button
            title="Settings"
            onPress={() => navigation.navigate(ROUTE_SETTINGS)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    alignContent: "center",
    marginTop: 20,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  title2: {
    fontSize: 20,
    alignContent: "center",
    marginTop: 8,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },

});
