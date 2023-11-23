import { useAxios } from "@hooks/useAxios";
import { AddPaymentModeType, PaymentModeType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const usePaymentModeApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getPaymentMode = (): UseQueryResult<PaymentModeType[]> => {
    return useQuery<PaymentModeType[]>({
      queryKey: [queryKeys.PAYMENTMODE_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_PAYMENTMODE);
        const data = response.data.data.sort((a: { paymentMode: string; }, b: { paymentMode: any; }) => a.paymentMode.localeCompare(b.paymentMode));
        return data;
      },
      staleTime: Infinity,
    });
  };

  const getPaymentModeData = (id: string): UseQueryResult<PaymentModeType> => {
    return useQuery<PaymentModeType>({
      queryKey: [queryKeys.PAYMENTMODE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_PAYMENTMODE.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addPaymentMode = async (
    paymentModeData: AddPaymentModeType
  ): Promise<ApiResponseType<PaymentModeType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_PAYMENTMODE,
      paymentModeData
    );
    return response.data.data;
  };

  const addPaymentModeMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddPaymentModeType) => addPaymentMode(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.PAYMENTMODE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updatePaymentModeData = async (
    updatePaymentModeData: AddPaymentModeType
  ): Promise<ApiResponseType<PaymentModeType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_PAYMENTMODE.replace(
        "{id}",
        "" + updatePaymentModeData.id
      ),
      updatePaymentModeData
    );
    return response.data.data;
  };

  const updatePaymentModeMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddPaymentModeType) => updatePaymentModeData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.PAYMENTMODE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deletePaymentMode = async (
    id: string
  ): Promise<ApiResponseType<PaymentModeType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_PAYMENTMODE.replace("{id}", id)
    );
    return response.data.data;
  };

  const deletePaymentModeMutation = () => {
    const mutation = useMutation((id: string) => deletePaymentMode(id), {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [queryKeys.PAYMENTMODE_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getPaymentMode,
    getPaymentModeData,
    addPaymentModeMutation,
    updatePaymentModeMutation,
    deletePaymentModeMutation,
  };
};
