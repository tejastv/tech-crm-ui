import { useAxios } from "@hooks/useAxios";
import { CountryType, CountryFormType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType, MapType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { selectOptionsMapMaker } from "@utils/selectOptionsMaker";

export const useCountryApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getCountry = (): UseQueryResult<MapType<CountryType>> => {
    return useQuery<MapType<CountryType>>({
      queryKey: [queryKeys.COUNTRY_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_COUNTRY);
        const data = response.data.data.sort(
          (a: { countryName: string }, b: { countryName: any }) =>
            a.countryName.localeCompare(b.countryName)
        );
        let mapedData = selectOptionsMapMaker(data, "countryId", "countryName");
        return mapedData;
      },
      staleTime: Infinity,
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const getCountryData = (
    id: string,
    condition: any
  ): UseQueryResult<CountryType> => {
    return useQuery<CountryType>({
      queryKey: [queryKeys.COUNTRY_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_COUNTRY.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addCountry = async (
    countryData: CountryFormType
  ): Promise<ApiResponseType<CountryType>> => {
    const response = await instance.post(apiUrls.GET_ADD_COUNTRY, countryData);
    return response.data.data;
  };

  const addCountryMutation = () => {
    const mutation = useMutation(
      (updatedItem: CountryFormType) => addCountry(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.COUNTRY_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateCountryData = async (
    updateCountryData: CountryFormType
  ): Promise<ApiResponseType<CountryType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_COUNTRY.replace(
        "{id}",
        "" + updateCountryData.id
      ),
      updateCountryData
    );
    return response.data.data;
  };

  const updateCountryMutation = () => {
    const mutation = useMutation(
      (updatedItem: CountryFormType) => updateCountryData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.COUNTRY_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteCountry = async (id: string): Promise<CountryType[]> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_COUNTRY.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteCountryMutation = () => {
    const mutation = useMutation((id: string) => deleteCountry(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.COUNTRY_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getCountry,
    getCountryData,
    addCountryMutation,
    updateCountryMutation,
    deleteCountryMutation,
  };
};
