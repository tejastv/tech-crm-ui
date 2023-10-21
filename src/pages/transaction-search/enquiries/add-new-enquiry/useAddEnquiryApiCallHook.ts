import { useAxios } from "@hooks/useAxios";
import {
  AddUpdateEnquiryType,
  AllEnquiriesType,
  EnqType,
  PriceType,
  RefNoType,
  ServiceType,
} from "@transaction-search/index";
import { apiUrls, queryKeys } from "@constants/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { ApiResponseType } from "@shared/index";
import { useNavigate } from "react-router-dom";

export const useAddEnquiryApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const callFormConfig = {
    headers: {
      callFrom: "transaction",
    },
  };

  const getEnqStatus = (): UseQueryResult<EnqType[]> => {
    return useQuery<EnqType[]>({
      queryKey: [queryKeys.ENQSTATUS_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_ENQSTATUS,callFormConfig);
       const data = response.data.data.sort((a: { enquiryStatus: string; }, b: { enquiryStatus: any; }) => a.enquiryStatus.localeCompare(b.enquiryStatus));
        return data;
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
        const data = response.data.data.sort((a: { serviceType: string; }, b: { serviceType: any; }) => a.serviceType.localeCompare(b.serviceType));
        return data;
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

  const addEnquiry = async (
    enquiryData: AddUpdateEnquiryType
  ): Promise<ApiResponseType<AllEnquiriesType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_ALL_ENQUIRY,
      enquiryData,
      callFormConfig
    );
    return response.data.data;
  };

  const addEnquiryMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateEnquiryType) => addEnquiry(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.ENQUIRY_DATA],
          });
          navigate("/transaction/enquiry-details");
        },
      }
    );
    return mutation;
  };

  return {
    addEnquiryMutation,
    getServiceType,
    getEnqStatus,
    getRefNo,
    getClientDetails,
    getPrice,
  };
};
