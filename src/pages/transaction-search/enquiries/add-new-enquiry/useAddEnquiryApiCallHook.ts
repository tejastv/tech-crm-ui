import { useAxios } from "@hooks/useAxios";
import {
  EnquiriesType,
  EnqStatusType,
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
import { ApiResponseType, MapType } from "@shared/index";
import { useNavigate } from "react-router-dom";
import { selectOptionsMapMaker } from "@utils/selectOptionsMaker";

export const useAddEnquiryApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const callFormConfig = {
    headers: {
      callFrom: "transaction",
    },
  };

  const getEnqStatus = (): UseQueryResult<MapType<EnqStatusType>> => {
    return useQuery<MapType<EnqStatusType>>({
      queryKey: [queryKeys.ENQSTATUS_DATA],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_ADD_ENQSTATUS,
          callFormConfig
        );
        const data = response.data.data.sort(
          (a: { enquiryStatus: string }, b: { enquiryStatus: any }) =>
            a.enquiryStatus.localeCompare(b.enquiryStatus)
        );
        let mapedData = selectOptionsMapMaker(
          data,
          "enquiryStatusID",
          "enquiryStatus"
        );
        return mapedData;
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
        const data = response.data.data.sort(
          (a: { serviceType: string }, b: { serviceType: any }) =>
            a.serviceType.localeCompare(b.serviceType)
        );
        let mapedData = selectOptionsMapMaker(
          data,
          "serviceTypeId",
          "serviceType"
        );
        return mapedData;
      },
      staleTime: Infinity,
    });
  };

  // ref no
  const getRefNo = (condition: any): UseQueryResult<string> => {
    return useQuery<string>({
      queryKey: [queryKeys.REFNO_DATA],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_ADD_REFNO,
          callFormConfig
        );
        return response.data.data;
      },
      enabled: condition,
      staleTime: 0,
      cacheTime: 0,
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const getClientDetails = async (id: string): Promise<RefNoType> => {
    const response = await instance.get(
      apiUrls.GET_UPDATE_DELETE_CLIENT.replace("{id}", id)
    );
    return response.data;
  };

  const getPrice = (ids: any, condition: any) => {
    return useQuery<Array<any>>({
      queryKey: [queryKeys.PRICE_DATA, ids.countryId + ids.clientId],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.CLIENT_WISE_PRICE.replace("{id}", ids.clientId),
          {
            params: {
              country_id: ids.countryId,
            },
          }
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addEnquiry = async (
    enquiryData: Partial<EnquiriesType>
  ): Promise<ApiResponseType<EnquiriesType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_ALL_ENQUIRY,
      enquiryData,
      callFormConfig
    );
    return response.data.data;
  };

  const addEnquiryMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<EnquiriesType>) => addEnquiry(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.ENQUIRY_DATA],
          });
          navigate("/transaction/enquiry-details");
        },
      }
    );
    return mutation;
  };

  const updateEnquiry = async (
    updateEnqData: Partial<EnquiriesType>
  ): Promise<ApiResponseType<EnquiriesType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_ALL_ENQUIRY.replace(
        "{id}",
        "" + updateEnqData.id
      ),
      updateEnqData,
      callFormConfig
    );
    return response.data.data;
  };

  const updateEnquiryMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<EnquiriesType>) => updateEnquiry(updatedItem),
      {
        onSuccess: async () => {
          await await queryClient.invalidateQueries({
            queryKey: [queryKeys.ENQUIRY_DATA],
          });
          navigate("..");
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
    updateEnquiryMutation,
  };
};
