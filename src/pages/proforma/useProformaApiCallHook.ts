import { apiUrls, queryKeys } from "@constants/index";
import { useAxios } from "@hooks/useAxios";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { GeneratePiType } from ".";
import { EnqPiType } from "@proforma/index";
import { ApiResponseType } from "@shared/index";
import { useNavigate } from "react-router-dom";

export const useProformaApiCallHook = () => {
  const { instance } = useAxios();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const callFormConfig = {
    headers: {
      callFrom: "transaction",
    },
  };

  const getEnquiryPi = (): UseQueryResult<Array<GeneratePiType>> => {
    return useQuery<Array<GeneratePiType>>({
      queryKey: [queryKeys.PROFORMA_DATA],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_ADD_ENQUIRY_PI,
          callFormConfig
        );
        return response.data.data.records;
      },
      staleTime: Infinity,
    });
  };

  const getEnquiryPiData = (
    id: string,
    condition?: any
  ): UseQueryResult<EnqPiType> => {
    return useQuery<EnqPiType>({
      queryKey: [queryKeys.PROFORMA_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.UPDATE_DELETE_ENQUIRY_PI.replace("{id}", id),
          callFormConfig
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addEnquiryPi = async (
    enquiryPiData: Partial<EnqPiType>
  ): Promise<ApiResponseType<EnqPiType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_ENQUIRY_PI,
      enquiryPiData,
      callFormConfig
    );
    return response.data.data;
  };

  const addEnquiryPiMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<EnqPiType>) => addEnquiryPi(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.PROFORMA_DATA],
          });
          navigate("/proforma/enq-pi");
        },
      }
    );
    return mutation;
  };

  const deleteProforma = async (
    id: string
  ): Promise<ApiResponseType<GeneratePiType>> => {
    const response = await instance.delete(
      apiUrls.UPDATE_DELETE_ENQUIRY_PI.replace("{id}", id),
      callFormConfig
    );
    return response.data.data;
  };

  const deleteProformaMutation = () => {
    const mutation = useMutation((id: string) => deleteProforma(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.PROFORMA_DATA],
        });
      },
    });
    return mutation;
  };

  const updateEnquiryPi = async (
    updateEnqPiData: Partial<EnqPiType>
  ): Promise<ApiResponseType<EnqPiType>> => {
    const response = await instance.put(
      apiUrls.UPDATE_DELETE_ENQUIRY_PI.replace("{id}", "" + updateEnqPiData.id),
      updateEnqPiData,
      callFormConfig
    );
    return response.data.data;
  };

  const updateEnquiryPiMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<EnqPiType>) => updateEnquiryPi(updatedItem),
      {
        onSuccess: async () => {
          await await queryClient.invalidateQueries({
            queryKey: [queryKeys.PROFORMA_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  return {
    getEnquiryPi,
    getEnquiryPiData,
    addEnquiryPiMutation,
    deleteProformaMutation,
    updateEnquiryPiMutation,
  };
};
