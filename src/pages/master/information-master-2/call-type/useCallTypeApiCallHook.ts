import { useAxios } from "@hooks/useAxios";
import { CallMasterType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useCallTypeApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getCallType = (): UseQueryResult<Array<CallMasterType>> => {
    return useQuery<Array<CallMasterType>>({
      queryKey: [queryKeys.CALL_TYPE_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_CALL_TYPE);
        const data = response.data.data.sort(
          (a: { typeName: string }, b: { typeName: any }) =>
            a.typeName.localeCompare(b.typeName)
        );
        return data;
      },
      staleTime: Infinity,
    });
  };

  const getCallTypeData = (
    id: string,
    condition: boolean
  ): UseQueryResult<CallMasterType> => {
    return useQuery<CallMasterType>({
      queryKey: [queryKeys.CALL_TYPE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_CALL_TYPE.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addCallType = async (
    callTypeData: Partial<CallMasterType>
  ): Promise<ApiResponseType<CallMasterType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_CALL_TYPE,
      callTypeData
    );
    return response.data.data;
  };

  const addCallTypeMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<CallMasterType>) => addCallType(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.CALL_TYPE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateCallTypeData = async (
    updateCallTypeData: Partial<CallMasterType>
  ): Promise<ApiResponseType<CallMasterType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_CALL_TYPE.replace(
        "{id}",
        "" + updateCallTypeData.typeId
      ),
      updateCallTypeData
    );
    return response.data.data;
  };

  const updateCallTypeMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<CallMasterType>) => updateCallTypeData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.CALL_TYPE_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteCallType = async (
    id: string
  ): Promise<ApiResponseType<CallMasterType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_CALL_TYPE.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteCallTypeMutation = () => {
    const mutation = useMutation((id: string) => deleteCallType(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.CALL_TYPE_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getCallType,
    getCallTypeData,
    addCallTypeMutation,
    updateCallTypeMutation,
    deleteCallTypeMutation,
  };
};
