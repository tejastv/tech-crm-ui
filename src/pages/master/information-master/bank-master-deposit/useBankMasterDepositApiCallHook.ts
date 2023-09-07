import { useAxios } from "@hooks/useAxios";
import { AddBankDepositType, BankDepositType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useBankMasterDepositApiCallHook = () => {
    const { instance } = useAxios();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const getBankMasterDeposit = () => {
        return useQuery<BankDepositType[]>({
            queryKey: [queryKeys.BANKMASTER_DEPOSIT_DATA],
            queryFn: async () => {
                const response = await instance.get(apiUrls.GET_ADD_BANKMASTER_DEPOSIT);
                return response.data.data;
            },
            staleTime: Infinity,
        })
    }

    const getBankMasterDepositData = (id: string) => {
        return useQuery<BankDepositType>({
            queryKey: [queryKeys.BANKMASTER_DEPOSIT_DATA, id],
            queryFn: async () => {
                const response = await instance.get(
                    apiUrls.GET_UPDATE_DELETE_BANKMASTER_DEPOSIT.replace("{id}", id)
                );
                return response.data.data;
            },
            enabled: true, // Query is initially enabled
            refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
        });
    };

    const addBankMasterDeposit = async (
        BankDepositData: AddBankDepositType
    ): Promise<ApiResponseType<BankDepositType>> => {
        const response = await instance.post(apiUrls.GET_ADD_BANKMASTER_DEPOSIT, BankDepositData);
        return response.data.data;
    };

    const addBankMasterDepositMutation = () => {
        const mutation = useMutation(
            (updatedItem: AddBankDepositType) => addBankMasterDeposit(updatedItem),
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: [queryKeys.BANKMASTER_DEPOSIT_DATA] });
                    navigate("..");
                },
            }
        );
        return mutation;
    };

    const updateBankMasterDepositData = async (
        BankMasterDepositData: AddBankDepositType
    ): Promise<ApiResponseType<BankDepositType>> => {
        const response = await instance.put(
            apiUrls.GET_UPDATE_DELETE_BANKMASTER_DEPOSIT.replace("{id}", "" + BankMasterDepositData.id),
            BankMasterDepositData
        );
        return response.data.data;
    };

    const updateBankMasterDepositOnMutation = () => {
        const mutation = useMutation(
            (updatedItem: AddBankDepositType) => updateBankMasterDepositData(updatedItem),
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: [queryKeys.BANKMASTER_DEPOSIT_DATA] });
                    navigate("..");
                },
            }
        );
        return mutation;
    };

    const deleteBankMasterDeposit = async (id: string): Promise<ApiResponseType<BankDepositType>> => {
        const response = await instance.delete(
            apiUrls.GET_UPDATE_DELETE_BANKMASTER_DEPOSIT.replace("{id}", id)
        );
        return response.data.data;
    };

    const deleteBankMasterDepositMutation = () => {
        const mutation = useMutation((id: string) => deleteBankMasterDeposit(id), {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [queryKeys.BANKMASTER_DEPOSIT_DATA] });
            },
        });
        return mutation;
    };

    return {
        getBankMasterDeposit,
        getBankMasterDepositData,
        addBankMasterDepositMutation,
        updateBankMasterDepositOnMutation,
        deleteBankMasterDepositMutation,
    };
};
