import { useAxios } from "@hooks/useAxios";
import { CreditDaysType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { selectOptionsMapMaker } from "@utils/selectOptionsMaker";

export const useCreditDaysApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getCreditDays = (): UseQueryResult<{
    [key: string | number]: CreditDaysType;
  }> => {
    return useQuery<{ [key: string | number]: CreditDaysType }>({
      queryKey: [queryKeys.CREDIT_DAYS_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_CREDIT_DAYS);
        const data = response.data.data;
        let mapedData = selectOptionsMapMaker(
          data,
          "creditPeriodId",
          "creditPeriod"
        );
        return mapedData;
      },
      staleTime: Infinity,
    });
  };

  const getCreditDaysData = (
    id: string,
    condition: boolean
  ): UseQueryResult<CreditDaysType> => {
    return useQuery<CreditDaysType>({
      queryKey: [queryKeys.CREDIT_DAYS_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_CREDIT_DAYS.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addCreditDays = async (
    creditDaysData: Partial<CreditDaysType>
  ): Promise<ApiResponseType<CreditDaysType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_CREDIT_DAYS,
      creditDaysData
    );
    return response.data.data;
  };

  const addCreditDaysMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<CreditDaysType>) => addCreditDays(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.CREDIT_DAYS_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateCreditDaysData = async (
    updateCreditDaysData: Partial<CreditDaysType>
  ): Promise<ApiResponseType<CreditDaysType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_CREDIT_DAYS.replace(
        "{id}",
        "" + updateCreditDaysData.creditPeriodId
      ),
      updateCreditDaysData
    );
    return response.data.data;
  };

  const updateCreditDaysMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<CreditDaysType>) =>
        updateCreditDaysData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
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
      onSuccess: async () => {
        await queryClient.invalidateQueries({
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
