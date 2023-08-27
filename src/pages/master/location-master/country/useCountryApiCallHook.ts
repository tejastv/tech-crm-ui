import { useAxios } from "@hooks/useAxios";
import { CountryType, AddCountryType } from "@master/index";
import { apiUrls } from "@constants/index";
import { ApiResponseType } from "@shared/index";

export const useCountryApiCallHook = () => {
  const { instance } = useAxios();

  const getCountry = async (): Promise<CountryType[]> => {
    const response = await instance.get(apiUrls.GET_ADD_COUNTRY);
    return response.data.data;
  };

  const addCountry = async (
    countryData: AddCountryType
  ): Promise<ApiResponseType<CountryType>> => {
    const response = await instance.post(apiUrls.GET_ADD_COUNTRY, countryData);
    return response.data.data;
  };

  const deleteCountry = async (id: string): Promise<CountryType[]> => {
    const response = await instance.delete(
      apiUrls.DELETE_COUNTRY.replace("{id}", id)
    );
    return response.data.data;
  };

  return { getCountry, addCountry, deleteCountry };
};
