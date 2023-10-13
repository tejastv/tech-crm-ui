import { useAxios } from "@hooks/useAxios";
import {
  EnqType,
  PriceType,
  RefNoType,
  ServiceType,
} from "@transaction-search/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

export const useServiceTypeApiCallHook = () => {
  const { instance } = useAxios();

  const callFormConfig = {
    headers: {
      callFrom: "transaction",
    },
  };

  const getEnqStatus = (): UseQueryResult<EnqType[]> => {
    return useQuery<EnqType[]>({
      queryKey: [queryKeys.ENQSTATUS_DATA],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_ADD_ENQSTATUS,
          callFormConfig
        );
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const getServiceType = (): UseQueryResult<ServiceType[]> => {
    return useQuery<ServiceType[]>({
      queryKey: [queryKeys.SERVICETYPE_DATA],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_ADD_SERVICETYPE,
          callFormConfig
        );
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  //   ref no
  const getRefNo = async (): Promise<RefNoType> => {
    const response = await instance.get(apiUrls.GET_ADD_REFNO, callFormConfig);
    return response.data;
  };

  const getClientDetails = async (id: string): Promise<RefNoType> => {
    const response = await instance.get(
      apiUrls.GET_UPDATE_DELETE_CLIENT.replace("{id}", id)
    );
    return response.data;
  };

  const getPrice = (ids: any, condition: any) => {
    return useQuery<PriceType>({
      queryKey: [
        queryKeys.PRICE_DATA,
        ids.countryId + ids.clientId + ids.serviceTypeId,
      ],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_PRICE.replace("{client_id}", ids.clientId)
            .replace("{country_id}", ids.countryId)
            .replace("{serviceTypeId}", ids.serviceTypeId)
        );
        return response.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  return {
    getServiceType,
    getEnqStatus,
    getRefNo,
    getClientDetails,
    getPrice,
  };
};
