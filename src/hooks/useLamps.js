

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

  const getLampById = async (lampId) => {
    const allMyLamps = await getLamps();
    return allMyLamps.find((el) => el.id === lampId);
  };

  const setFavouriteLamp = async (updateLamp) => {
    const allMyLamps = await getLamps();
    const newArrayLamps = allMyLamps.filter((el) => el.id !== updateLamp.id);
    AsyncStorage.storeData("MIS_LAMPARAS", [
      ...newArrayLamps,
      { ...updateLamp, favorito: !updateLamp.favorito },
    ]);
  };

  return { getLamps, setFavouriteLamp, getLampById };
};