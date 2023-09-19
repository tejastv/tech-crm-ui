import { useAxios } from "@hooks/useAxios";
import {
  AddUpdateClientGroupType,
  ClientBasedOnClientId,
  ClientGroupType,
} from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useClientGroupApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getClientGroup = (): UseQueryResult<ClientGroupType[]> => {
    return useQuery<ClientGroupType[]>({
      queryKey: [queryKeys.CLIENT_GROUP_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_CLIENT_GROUP);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const getClientGroupData = (id: string): UseQueryResult<ClientGroupType> => {
    return useQuery<ClientGroupType>({
      queryKey: [queryKeys.CLIENT_GROUP_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_CLIENT_GROUP.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addClientGroup = async (
    clientGroupData: AddUpdateClientGroupType
  ): Promise<ApiResponseType<ClientGroupType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_CLIENT_GROUP,
      clientGroupData
    );
    return response.data.data;
  };

  const addClientGroupMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateClientGroupType) => addClientGroup(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.CLIENT_GROUP_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateClientGroupData = async (
    updateClientGroupData: AddUpdateClientGroupType
  ): Promise<ApiResponseType<ClientGroupType>> => {
    const response = await instance.put(
      apiUrls.UPDATE_CLIENT_GROUP.replace(
        "{ClientGroupId}",
        "" + updateClientGroupData.id
      ).replace("{clintGroupIdToMove}", "" + updateClientGroupData.clintId[0]),
      {
        clintId: updateClientGroupData.clintId,
        ClientGroupDto: updateClientGroupData.ClientGroupDto,
      }
    );
    return response.data.data;
  };

  const updateClientGroupMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateClientGroupType) =>
        updateClientGroupData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.CLIENT_GROUP_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteClientGroup = async (
    id: string
  ): Promise<ApiResponseType<ClientGroupType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_CLIENT_GROUP.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteClientGroupMutation = () => {
    const mutation = useMutation((id: string) => deleteClientGroup(id), {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [queryKeys.CLIENT_GROUP_DATA],
        });
      },
    });
    return mutation;
  };
  const getClientGroupBasedOnIdData = (
    id: string
  ): UseQueryResult<ClientBasedOnClientId[]> => {
    return useQuery<ClientBasedOnClientId[]>({
      queryKey: [queryKeys.CLIENT_GROUP_BASED_ON_ID_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_CLIENT_GROUP_BASED_ON_ID.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  return {
    getClientGroup,
    getClientGroupData,
    addClientGroupMutation,
    updateClientGroupMutation,
    deleteClientGroupMutation,
    getClientGroupBasedOnIdData,
  };
};
