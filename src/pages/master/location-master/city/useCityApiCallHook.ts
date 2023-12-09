import { useAxios } from "@hooks/useAxios";
import { CityFormType, CityType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  QueryClient,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { selectOptionsMapMaker } from "@utils/selectOptionsMaker";

export const useCityApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  const getCity = (): UseQueryResult<{ [key: string | number]: CityType }> => {
    return useQuery<{ [key: string | number]: CityType }>({
      queryKey: [queryKeys.CITY_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_CITY);
        const data = response.data.data.sort(
          (a: { cityName: string }, b: { cityName: any }) =>
            a.cityName.localeCompare(b.cityName)
        );
        let mapedData = selectOptionsMapMaker(data, "cityId", "cityName");
        return mapedData;
      },
      staleTime: Infinity,
    });
  };

  const getCityData = (
    id: string,
    condition?: any
  ): UseQueryResult<CityType> => {
    return useQuery<CityType>({
      queryKey: [queryKeys.CITY_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_CITY.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addCity = async (
    cityData: CityFormType
  ): Promise<ApiResponseType<CityType>> => {
    const response = await instance.post(apiUrls.GET_ADD_CITY, cityData);
    return response.data.data;
  };

  const addCityMutation = () => {
    const mutation = useMutation(
      (updatedItem: CityFormType) => addCity(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.CITY_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateCityData = async (
    updateCityData: CityFormType
  ): Promise<ApiResponseType<CityType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_CITY.replace("{id}", "" + updateCityData.id),
      updateCityData
    );
    return response.data.data;
  };

  const updateCityMutation = () => {
    const mutation = useMutation(
      (updatedItem: CityFormType) => updateCityData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.CITY_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteCity = async (id: string): Promise<ApiResponseType<CityType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_CITY.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteCityMutation = () => {
    const mutation = useMutation((id: string) => deleteCity(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.CITY_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getCity,
    getCityData,
    addCityMutation,
    updateCityMutation,
    deleteCityMutation,
  };
};
