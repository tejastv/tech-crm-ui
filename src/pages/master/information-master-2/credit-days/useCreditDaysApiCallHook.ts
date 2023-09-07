import { useAxios } from "@hooks/useAxios";
import { AddUpdateCreditDaysType, CreditDaysType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useCreditDaysApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getCreditDays = (): UseQueryResult<CreditDaysType[]> => {
    return useQuery<CreditDaysType[]>({
      queryKey: [queryKeys.CREDIT_DAYS_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_CREDIT_DAYS);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const getCreditDaysData = (id: string): UseQueryResult<CreditDaysType> => {
    return useQuery<CreditDaysType>({
      queryKey: [queryKeys.CREDIT_DAYS_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_CREDIT_DAYS.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addCreditDays = async (
    creditDaysData: AddUpdateCreditDaysType
  ): Promise<ApiResponseType<CreditDaysType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_CREDIT_DAYS,
      creditDaysData
    );
    return response.data.data;
  };

  const addCreditDaysMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateCreditDaysType) => addCreditDays(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.CREDIT_DAYS_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateCreditDaysData = async (
    updateCreditDaysData: AddUpdateCreditDaysType
  ): Promise<ApiResponseType<CreditDaysType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_CREDIT_DAYS.replace(
        "{id}",
        "" + updateCreditDaysData.id
      ),
      updateCreditDaysData
    );
    return response.data.data;
  };

  const updateCreditDaysMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateCreditDaysType) =>
        updateCreditDaysData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.CREDIT_DAYS_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteCreditDays = async (
    id: string
  ): Promise<ApiResponseType<CreditDaysType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_CREDIT_DAYS.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteCreditDaysMutation = () => {
    const mutation = useMutation((id: string) => deleteCreditDays(id), {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [queryKeys.CREDIT_DAYS_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getCreditDays,
    getCreditDaysData,
    addCreditDaysMutation,
    updateCreditDaysMutation,
    deleteCreditDaysMutation,
  };
};
