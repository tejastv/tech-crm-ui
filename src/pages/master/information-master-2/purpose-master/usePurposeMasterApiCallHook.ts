import { useAxios } from "@hooks/useAxios";
import { PurposeMasterFormType, PurposeMasterType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const usePurposeMasterApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getPurposeMaster = (): UseQueryResult<Array<PurposeMasterType>> => {
    return useQuery<Array<PurposeMasterType>>({
      queryKey: [queryKeys.PURPOSE_MASTER_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_PURPOSE_MASTER);
        const data = response.data.data.sort(
          (a: { purpose: string }, b: { purpose: any }) =>
            a.purpose.localeCompare(b.purpose)
        );
        return data;
      },
      staleTime: Infinity,
    });
  };

  const getPurposeMasterData = (
    id: string,
    condition: boolean
  ): UseQueryResult<PurposeMasterType> => {
    return useQuery<PurposeMasterType>({
      queryKey: [queryKeys.PURPOSE_MASTER_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_PURPOSE_MASTER.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addPurposeMaster = async (
    purposeMasterData: Partial<PurposeMasterType>
  ): Promise<ApiResponseType<PurposeMasterType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_PURPOSE_MASTER,
      purposeMasterData
    );
    return response.data.data;
  };

  const addPurposeMasterMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<PurposeMasterType>) => addPurposeMaster(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.PURPOSE_MASTER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updatePurposeMasterData = async (
    updatePurposeMasterData: Partial<PurposeMasterType>
  ): Promise<ApiResponseType<PurposeMasterType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_PURPOSE_MASTER.replace(
        "{id}",
        "" + updatePurposeMasterData.purposeId
      ),
      updatePurposeMasterData
    );
    return response.data.data;
  };

  const updatePurposeMasterMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<PurposeMasterType>) =>
        updatePurposeMasterData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.PURPOSE_MASTER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deletePurposeMaster = async (
    id: string
  ): Promise<ApiResponseType<PurposeMasterType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_PURPOSE_MASTER.replace("{id}", id)
    );
    return response.data.data;
  };

  const deletePurposeMasterMutation = () => {
    const mutation = useMutation((id: string) => deletePurposeMaster(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.PURPOSE_MASTER_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getPurposeMaster,
    getPurposeMasterData,
    addPurposeMasterMutation,
    updatePurposeMasterMutation,
    deletePurposeMasterMutation,
  };
};
