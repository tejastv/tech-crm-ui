import { useAxios } from "@hooks/useAxios";
import { AddUpdateCityType, CityType, SegmentType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useSegmentApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getSegment = () => {
    return useQuery<SegmentType[]>({
      queryKey: [queryKeys.SEGMENT_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_SEGMENT);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  // const getCityData = (id: string) => {
  //   return useQuery<CityType>({
  //     queryKey: [queryKeys.CITY_DATA, id],
  //     queryFn: async () => {
  //       const response = await instance.get(
  //         apiUrls.GET_UPDATE_DELETE_CITY.replace("{id}", id)
  //       );
  //       return response.data.data;
  //     },
  //     enabled: true, // Query is initially enabled
  //     refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
  //   });
  // };

  // const addCity = async (
  //   cityData: AddUpdateCityType
  // ): Promise<ApiResponseType<CityType>> => {
  //   const response = await instance.post(apiUrls.GET_ADD_CITY, cityData);
  //   return response.data.data;
  // };

  // const addCityMutation = () => {
  //   const mutation = useMutation(
  //     (updatedItem: AddUpdateCityType) => addCity(updatedItem),
  //     {
  //       onSuccess: () => {
  //         queryClient.invalidateQueries({ queryKey: [queryKeys.CITY_DATA] });
  //         navigate("..");
  //       },
  //     }
  //   );
  //   return mutation;
  // };

  // const updateCityData = async (
  //   updateCityData: AddUpdateCityType
  // ): Promise<ApiResponseType<CityType>> => {
  //   const response = await instance.put(
  //     apiUrls.GET_UPDATE_DELETE_CITY.replace("{id}", "" + updateCityData.id),
  //     updateCityData
  //   );
  //   return response.data.data;
  // };

  // const updateCityMutation = () => {
  //   const mutation = useMutation(
  //     (updatedItem: AddUpdateCityType) => updateCityData(updatedItem),
  //     {
  //       onSuccess: () => {
  //         queryClient.invalidateQueries({ queryKey: [queryKeys.CITY_DATA] });
  //         navigate("..");
  //       },
  //     }
  //   );
  //   return mutation;
  // };

  // const deleteCity = async (id: string): Promise<ApiResponseType<CityType>> => {
  //   const response = await instance.delete(
  //     apiUrls.GET_UPDATE_DELETE_CITY.replace("{id}", id)
  //   );
  //   return response.data.data;
  // };

  // const deleteCityMutation = () => {
  //   const mutation = useMutation((id: string) => deleteCity(id), {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: [queryKeys.CITY_DATA] });
  //     },
  //   });
  //   return mutation;
  // };

  return {
    getSegment,
    // getCityData,
    // addCityMutation,
    // updateCityMutation,
    // deleteCityMutation,
  };
};
