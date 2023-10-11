import { useAxios } from "@hooks/useAxios";
import { EnqType, RefNoType, ServiceType } from "@transaction-search/index";
import { apiUrls, queryKeys } from "@constants/index";
import { UseQueryResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useServiceTypeApiCallHook = () => {
  const { instance } = useAxios();

  const callFormConfig = {
    headers: {
      "callFrom": "transaction",
    },
  };

  const getEnqStatus = (): UseQueryResult<EnqType[]> => {
    return useQuery<EnqType[]>({
      queryKey: [queryKeys.ENQSTATUS_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_ENQSTATUS,callFormConfig);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  
  const getServiceType = (): UseQueryResult<ServiceType[]> => {
    return useQuery<ServiceType[]>({
      queryKey: [queryKeys.SERVICETYPE_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_SERVICETYPE,callFormConfig);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };


//   ref no 
const getRefNo = (): UseQueryResult<RefNoType[]> => {
    return useQuery<RefNoType[]>({
      queryKey: [queryKeys.REFNO_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_REFNO);
        const data = response.data.data.sort((a: { refNo: number; }, b: { refNo: number; }) => b.refNo - a.refNo);
        return data;

      },
      staleTime: Infinity,
    });
  };


  return {
    getServiceType,
    getEnqStatus,
    getRefNo,
  }
}