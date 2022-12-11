import AsyncStorage from "../services/AsyncStorage";
import lamparasService from "../services/lamparas";

export const useLamps = () => {
  // Obtiene todas las lamparas de la base de datos.
  // Siempre trae registros actualizados y nunca los guarda en el caché
  // Si por algun motivo el servicio no devuelve un array, retorna un array vacío
  const getLamps = async () => {
    const result = await lamparasService.getLamparas();
    if (!result) {
      return [];
    }
    return result;
  };

  // Obtiene las lamparas favoritas de un usuario que esten guardadas en cache
  // Siempre trae registros actualizados del caché
  // Si por algun motivo no devuelve un array, retorna un array vacío y lo setea en el caché para que la proxima devuelva un array vacio
  const getFavouriteLamps = async () => {
    const res = await AsyncStorage.getData("MIS_LAMPARAS_FAVORITAS");
    if (!res) {
      AsyncStorage.storeData("MIS_LAMPARAS_FAVORITAS", []);
      return [];
    }
    return res;
  };

  // Agregar o quitar de mi array de lamparas favoritas una lampara
  // busco la lampara en mi array
  // si la encuentro, entonces debo removerla
  // si no la encuentro y es undefined, entonces la agrego haciendo un spread operator del array de favoritos más la que quiero agregar
  const setFavouriteLamp = async (updateLamp) => {
    const myFavourteLamps = await getFavouriteLamps();
    const lampFound = myFavourteLamps.find((el) => el.id === updateLamp.id);
    if (!lampFound) {
      AsyncStorage.storeData("MIS_LAMPARAS_FAVORITAS", [
        ...myFavourteLamps,
        updateLamp,
      ]);
    } else {
      console.log("remover");
      const lampsUpdated = myFavourteLamps.filter(
        (el) => el.id !== updateLamp.id
      );
      AsyncStorage.storeData("MIS_LAMPARAS_FAVORITAS", [...lampsUpdated]);
    }
  };

  // Obtiene una lampara del catálgo completo
  const getLampById = async (lampId) => {
    const allMyLamps = await getLamps();
    return allMyLamps.find((el) => el.id === lampId);
  };

  // Obtiene una lampara del catálgo completo
  const getFavouriteState = async (lamp) => {
    const myFavourteLamps = await getFavouriteLamps();
    const lampInFavouriteArray = myFavourteLamps.find(
      (el) => el.id === lamp?.id
    );
    if (lampInFavouriteArray) {
      return true;
    } else {
      return false;
    }
  };

  return {
    getLamps,
    getFavouriteLamps,
    setFavouriteLamp,
    getLampById,
    getFavouriteState,
  };
};
