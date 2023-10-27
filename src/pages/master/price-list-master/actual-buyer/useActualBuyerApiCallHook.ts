import { useAxios } from "@hooks/useAxios";
import { AddUpdateActualBuyerType, ActualBuyerType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useActualBuyerApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getActualBuyer = (): UseQueryResult<ActualBuyerType[]> => {
    return useQuery<ActualBuyerType[]>({
      queryKey: [queryKeys.ACTUAL_BUYER_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_ACTUAL_BUYER);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const getActualBuyerData = (id: string): UseQueryResult<ActualBuyerType> => {
    return useQuery<ActualBuyerType>({
      queryKey: [queryKeys.ACTUAL_BUYER_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_ACTUAL_BUYER.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addActualBuyer = async (
    actualBuyerData: AddUpdateActualBuyerType
  ): Promise<ApiResponseType<ActualBuyerType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_ACTUAL_BUYER,
      actualBuyerData
    );
    return response.data.data;
  };

  const addActualBuyerMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateActualBuyerType) => addActualBuyer(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.ACTUAL_BUYER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateActualBuyerData = async (
    updateActualBuyerData: AddUpdateActualBuyerType
  ): Promise<ApiResponseType<ActualBuyerType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_ACTUAL_BUYER.replace(
        "{id}",
        "" + updateActualBuyerData.id
      ),
      updateActualBuyerData
    );
    return response.data.data;
  };

  const updateActualBuyerMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateActualBuyerType) =>
        updateActualBuyerData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.ACTUAL_BUYER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteActualBuyer = async (
    id: string
  ): Promise<ApiResponseType<ActualBuyerType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_ACTUAL_BUYER.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteActualBuyerMutation = () => {
    const mutation = useMutation((id: string) => deleteActualBuyer(id), {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [queryKeys.ACTUAL_BUYER_DATA],
        });
      },
    });
    return mutation;
  };

  const getActualBuyerByCLientData = (id: string): UseQueryResult<ActualBuyerType> => {
    return useQuery<ActualBuyerType>({
      queryKey: [queryKeys.ACTUAL_BUYER_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_ADD_ACTUAL_BUYER_BY_CLIENT.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  return {
    getActualBuyer,
    getActualBuyerData,
    addActualBuyerMutation,
    updateActualBuyerMutation,
    deleteActualBuyerMutation,
    getActualBuyerByCLientData,
  };
};
