import { useAxios } from "@hooks/useAxios";
import { CityType, locationMasterApiUrls } from "@pages/master";

export const useLocationMasterApiCall = () => {
  const { instance } = useAxios();

  const getCityData = async (): Promise<CityType[]> => {
    const response = await instance.get(locationMasterApiUrls.GET_CITY);
    return response.data.data;
  };

  return { getCityData };
};
