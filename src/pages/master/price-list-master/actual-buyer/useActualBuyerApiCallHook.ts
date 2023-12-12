import { useAxios } from "@hooks/useAxios";
import { ActualBuyerType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType, MapType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { selectOptionsMapMaker } from "@utils/selectOptionsMaker";

export const useActualBuyerApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getActualBuyer = (): UseQueryResult<MapType<ActualBuyerType>> => {
    return useQuery<MapType<ActualBuyerType>>({
      queryKey: [queryKeys.ACTUAL_BUYER_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_ACTUAL_BUYER);
        let mapedData = selectOptionsMapMaker(
          response.data.data,
          "partyId",
          "partyName"
        );
        return mapedData;
      },
      staleTime: Infinity,
    });
  };

  const getActualBuyerData = (
    id: string,
    condition: boolean
  ): UseQueryResult<ActualBuyerType> => {
    return useQuery<ActualBuyerType>({
      queryKey: [queryKeys.ACTUAL_BUYER_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_ACTUAL_BUYER.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addActualBuyer = async (
    actualBuyerData: Partial<ActualBuyerType>
  ): Promise<ApiResponseType<ActualBuyerType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_ACTUAL_BUYER,
      actualBuyerData
    );
    return response.data.data;
  };

  const addActualBuyerMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<ActualBuyerType>) => addActualBuyer(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.ACTUAL_BUYER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateActualBuyerData = async (
    updateActualBuyerData: Partial<ActualBuyerType>
  ): Promise<ApiResponseType<ActualBuyerType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_ACTUAL_BUYER.replace(
        "{id}",
        "" + updateActualBuyerData.partyId
      ),
      updateActualBuyerData
    );
    return response.data.data;
  };

  const updateActualBuyerMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<ActualBuyerType>) =>
        updateActualBuyerData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
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
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.ACTUAL_BUYER_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getActualBuyer,
    getActualBuyerData,
    addActualBuyerMutation,
    updateActualBuyerMutation,
    deleteActualBuyerMutation,
  };
};
