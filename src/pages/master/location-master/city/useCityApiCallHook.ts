import { useAxios } from "@hooks/useAxios";
import { AddCityType, CityType } from "@master/index";
import { apiUrls } from "@constants/index";
import { ApiResponseType } from "@shared/index";

export const useCityApiCallHook = () => {
  const { instance } = useAxios();

  const getCity = async (): Promise<CityType[]> => {
    const response = await instance.get(apiUrls.GET_ADD_CITY);
    return response.data.data;
  };

  const addCity = async (
    cityData: AddCityType
  ): Promise<ApiResponseType<CityType>> => {
    const response = await instance.post(apiUrls.GET_ADD_CITY, cityData);
    return response.data.data;
  };

  const deleteCity = async (id: string): Promise<ApiResponseType<CityType>> => {
    const response = await instance.delete(
      apiUrls.DELETE_CITY.replace("{id}", id)
    );
    return response.data.data;
  };

  return { getCity, addCity, deleteCity };
};
