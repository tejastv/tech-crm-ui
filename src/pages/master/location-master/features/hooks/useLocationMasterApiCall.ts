import { useAxios } from "@hooks/useAxios";
import {
  AddCityType,
  AddContinentType,
  AddCountryType,
  AddStateType,
  CityType,
  ContinentType,
  CountryType,
  StateType,
  locationMasterApiUrls,
} from "@pages/master";
import { ApiResponseType } from "@shared/index";

export const useLocationMasterApiCall = () => {
  const { instance } = useAxios();

  const getCity = async (): Promise<CityType[]> => {
    const response = await instance.get(locationMasterApiUrls.GET_ADD_CITY);
    return response.data.data;
  };

  const addCity = async (
    cityData: AddCityType
  ): Promise<ApiResponseType<CityType>> => {
    const response = await instance.post(
      locationMasterApiUrls.GET_ADD_CITY,
      cityData
    );
    return response.data.data;
  };

  const deleteCity = async (id: string): Promise<ApiResponseType<CityType>> => {
    const response = await instance.delete(
      locationMasterApiUrls.DELETE_CITY.replace("{id}", id)
    );
    return response.data.data;
  };

  const getState = async (): Promise<StateType[]> => {
    const response = await instance.get(locationMasterApiUrls.GET_ADD_STATE);
    return response.data.data;
  };

  const addState = async (
    stateData: AddStateType
  ): Promise<ApiResponseType<StateType>> => {
    const response = await instance.post(
      locationMasterApiUrls.GET_ADD_STATE,
      stateData
    );
    return response.data.data;
  };

  const deleteState = async (id: string): Promise<StateType[]> => {
    const response = await instance.delete(
      locationMasterApiUrls.DELETE_STATE.replace("{id}", id)
    );
    return response.data.data;
  };

  const getContinent = async (): Promise<ContinentType[]> => {
    const response = await instance.get(
      locationMasterApiUrls.GET_ADD_CONTINENT
    );
    return response.data.data;
  };

  const addContinent = async (
    continentData: AddContinentType
  ): Promise<ApiResponseType<ContinentType>> => {
    const response = await instance.post(
      locationMasterApiUrls.GET_ADD_CONTINENT,
      continentData
    );
    return response.data.data;
  };

  const deleteContinent = async (id: string): Promise<ContinentType[]> => {
    const response = await instance.delete(
      locationMasterApiUrls.DELETE_CONTINENT.replace("{id}", id)
    );
    return response.data.data;
  };

  const getCountry = async (): Promise<CountryType[]> => {
    const response = await instance.get(locationMasterApiUrls.GET_ADD_COUNTRY);
    return response.data.data;
  };

  const addCountry = async (
    countryData: AddCountryType
  ): Promise<ApiResponseType<CountryType>> => {
    const response = await instance.post(
      locationMasterApiUrls.GET_ADD_COUNTRY,
      countryData
    );
    return response.data.data;
  };

  const deleteCountry = async (id: string): Promise<CountryType[]> => {
    const response = await instance.delete(
      locationMasterApiUrls.DELETE_COUNTRY.replace("{id}", id)
    );
    return response.data.data;
  };

  return {
    getCity,
    getState,
    getContinent,
    getCountry,
    addCity,
    addState,
    addContinent,
    addCountry,
    deleteCity,
    deleteContinent,
    deleteCountry,
    deleteState,
  };
};
