import AsyncStorage from "../services/AsyncStorage";
import lamparasService from "../services/lamparas";

export const useLamps = () => {
  const getLamps = async () => {
    const res = await AsyncStorage.getData("MIS_LAMPARAS");
    if (!res) {
      const lampsByService = await lamparasService.getLamparas();
      AsyncStorage.storeData("MIS_LAMPARAS", lampsByService);
      return lampsByService;
    }

    return res;
  };

  const getFavouritesLamps = async () => {
    const res = await AsyncStorage.getData("MIS_LAMPARAS_FAVORITAS");
    if (!res) {
      AsyncStorage.storeData("MIS_LAMPARAS_FAVORITAS", []);
      return [];
    }

    return res;
  };

  const getLampById = async (lampId) => {
    const allMyLamps = await getLamps();
    return allMyLamps.find((el) => el.id === lampId);
  };

  const setFavouriteLamp = async (updateLamp) => {
    const myFavouritesLamps = await getFavouritesLamps();

    AsyncStorage.storeData("MIS_LAMPARAS_FAVORITAS", [
      ...myFavouritesLamps,
      updateLamp,
    ]);
  };

  const removeFavouriteLamp = async (updateLamp) => {
    const myFavouritesLamps = await getFavouritesLamps();
    let arrayLampsModified = myFavouritesLamps.filter(
      (el) => el !== updateLamp
    );
    AsyncStorage.storeData("MIS_LAMPARAS_FAVORITAS", arrayLampsModified);
  };

  return {
    getLamps,
    setFavouriteLamp,
    getLampById,
    getFavouritesLamps,
    removeFavouriteLamp,
  };
};
