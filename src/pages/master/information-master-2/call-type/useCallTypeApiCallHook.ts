import { useAxios } from "@hooks/useAxios";
import { CallTypeFormType, CallTypeType } from "@master/index";
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

  const getCallType = (): UseQueryResult<CallTypeType[]> => {
    return useQuery<CallTypeType[]>({
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

  const getCallTypeData = (id: string): UseQueryResult<CallTypeType> => {
    return useQuery<CallTypeType>({
      queryKey: [queryKeys.CALL_TYPE_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_CALL_TYPE.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addCallType = async (
    callTypeData: CallTypeFormType
  ): Promise<ApiResponseType<CallTypeType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_CALL_TYPE,
      callTypeData
    );
    return response.data.data;
  };

  const addCallTypeMutation = () => {
    const mutation = useMutation(
      (updatedItem: CallTypeFormType) => addCallType(updatedItem),
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
    updateCallTypeData: CallTypeFormType
  ): Promise<ApiResponseType<CallTypeType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_CALL_TYPE.replace(
        "{id}",
        "" + updateCallTypeData.typeID
      ),
      updateCallTypeData
    );
    return response.data.data;
  };

  const updateCallTypeMutation = () => {
    const mutation = useMutation(
      (updatedItem: CallTypeFormType) => updateCallTypeData(updatedItem),
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
  ): Promise<ApiResponseType<CallTypeType>> => {
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
