import { useAxios } from "@hooks/useAxios";
import { CountryType, AddUpdateCountryType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useCountryApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getCountry = () => {
    // const response = await instance.get(apiUrls.GET_ADD_COUNTRY);
    // return response.data.data;
    return useQuery<CountryType[]>({
      queryKey: [queryKeys.COUNTRY_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_COUNTRY);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const getCountryData = (id: string) => {
    return useQuery<CountryType>({
      queryKey: [queryKeys.COUNTRY_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_COUNTRY.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addCountry = async (
    countryData: AddUpdateCountryType
  ): Promise<ApiResponseType<CountryType>> => {
    const response = await instance.post(apiUrls.GET_ADD_COUNTRY, countryData);
    return response.data.data;
  };

  const addCountryMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateCountryType) => addCountry(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.COUNTRY_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateCountryData = async (
    updateCountryData: AddUpdateCountryType
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
      (updatedItem: AddUpdateCountryType) => updateCountryData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
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
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [queryKeys.COUNTRY_DATA] });
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
