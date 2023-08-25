import { useAxios } from "@hooks/useAxios";
import {
  AddCityType,
  AddContinentType,
  AddStateType,
  CityType,
  ContinentType,
  CountryType,
  StateType,
  locationMasterApiUrls,
} from "@pages/master";

export const useLocationMasterApiCall = () => {
  const { instance } = useAxios();

  const getCityData = async (): Promise<CityType[]> => {
    const response = await instance.get(locationMasterApiUrls.GET_ADD_CITY);
    return response.data.data;
  };

  const addCity = async (cityData: AddCityType): Promise<CityType[]> => {
    const response = await instance.post(
      locationMasterApiUrls.GET_ADD_CITY,
      cityData
    );
    return response.data.data;
  };

  const getStateData = async (): Promise<StateType[]> => {
    const response = await instance.get(locationMasterApiUrls.GET_ADD_STATE);
    return response.data.data;
  };

  const addState = async (stateData: AddStateType): Promise<CityType[]> => {
    const response = await instance.post(
      locationMasterApiUrls.GET_ADD_STATE,
      stateData
    );
    return response.data.data;
  };

  const getContinentData = async (): Promise<ContinentType[]> => {
    const response = await instance.get(
      locationMasterApiUrls.GET_ADD_CONTINENT
    );
    return response.data.data;
  };

  const addContinent = async (
    continentData: AddContinentType
  ): Promise<CityType[]> => {
    const response = await instance.post(
      locationMasterApiUrls.GET_ADD_CONTINENT,
      continentData
    );
    return response.data.data;
  };

  const getCountryData = async (): Promise<CountryType[]> => {
    const response = await instance.get(locationMasterApiUrls.GET_ADD_COUNTRY);
    return response.data.data;
  };

  return {
    getCityData,
    getStateData,
    getContinentData,
    getCountryData,
    addCity,
    addState,
    addContinent,
  };
};
