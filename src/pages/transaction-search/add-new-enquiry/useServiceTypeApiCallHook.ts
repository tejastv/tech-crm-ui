import { useAxios } from "@hooks/useAxios";
import { EnqType, ServiceType } from "@transaction-search/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import { UseQueryResult, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useServiceTypeApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
const getEnqType = () => {
    // const response = await instance.get(apiUrls.GET_ADD_COUNTRY);
    // return response.data.data;
    return useQuery<EnqType[]>({
      queryKey: [queryKeys.ENQTYPE_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_ENQTYPE);
        const data = response.data.data.sort((a: { enqtype: string; }, b: { enqtype: any; }) => a.enqtype.localeCompare(b.enqtype));
        return data;
      },
      staleTime: Infinity,
    });
  };

    const getServiceType = (): UseQueryResult<ServiceType[]> => {
    return useQuery<ServiceType[]>({
      queryKey: [queryKeys.SERVICETYPE_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_SERVICETYPE);
        const data = response.data.data.sort(
          (a: { state: string }, b: { state: any }) =>
            a.state.localeCompare(b.state)
        );
        return data;
      },
      staleTime: Infinity,
    });
  };

  const getServiceTypeData = (id: string) => {
    return useQuery<ServiceType>({
      queryKey: [queryKeys.SERVICETYPE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_ADD_SERVICETYPE.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };
  return {
    getServiceType,
    getServiceTypeData,
    getEnqType,
  }
}