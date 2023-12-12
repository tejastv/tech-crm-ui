import { useAxios } from "@hooks/useAxios";
import { BankDrawnOnFormType, BankdrawnonType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useBankMasterDrawnApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getBankMasterDrawnOn = (): UseQueryResult<BankdrawnonType[]> => {
    return useQuery<BankdrawnonType[]>({
      queryKey: [queryKeys.BANKMASTER_DRAWN_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_BANKMASTER_DRAWN);
        const data = response.data.data.sort(
          (a: { bankName: string }, b: { bankName: any }) =>
            a.bankName.localeCompare(b.bankName)
        );
        return data;
      },
      staleTime: Infinity,
    });
  };

  const getBankMasterDrawnOnData = (
    id: string,
    condition?: any
  ): UseQueryResult<BankdrawnonType> => {
    return useQuery<BankdrawnonType>({
      queryKey: [queryKeys.BANKMASTER_DRAWN_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_BANKMASTER_DRAWN.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addBankMasterDrawnOn = async (
    BankdrawnOnData: BankDrawnOnFormType
  ): Promise<ApiResponseType<BankdrawnonType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_BANKMASTER_DRAWN,
      BankdrawnOnData
    );
    return response.data.data;
  };

  const addBankMasterDrawnOnMutation = () => {
    const mutation = useMutation(
      (updatedItem: BankDrawnOnFormType) => addBankMasterDrawnOn(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.BANKMASTER_DRAWN_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateBankMasterDrawnOnData = async (
    BankMasterDrawnOnData: BankDrawnOnFormType
  ): Promise<ApiResponseType<BankdrawnonType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_BANKMASTER_DRAWN.replace(
        "{id}",
        "" + BankMasterDrawnOnData.id
      ),
      BankMasterDrawnOnData
    );
    return response.data.data;
  };

  const updateBankMasterDrawnOnMutation = () => {
    const mutation = useMutation(
      (updatedItem: BankDrawnOnFormType) =>
        updateBankMasterDrawnOnData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.BANKMASTER_DRAWN_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteBankMasterDrawnOn = async (
    id: string
  ): Promise<ApiResponseType<BankdrawnonType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_BANKMASTER_DRAWN.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteBankMasterDrawnOnMutation = () => {
    const mutation = useMutation((id: string) => deleteBankMasterDrawnOn(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.BANKMASTER_DRAWN_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getBankMasterDrawnOn,
    getBankMasterDrawnOnData,
    addBankMasterDrawnOnMutation,
    updateBankMasterDrawnOnMutation,
    deleteBankMasterDrawnOnMutation,
  };
};
