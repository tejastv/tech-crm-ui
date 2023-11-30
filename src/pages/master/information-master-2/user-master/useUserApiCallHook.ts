import { useAxios } from "@hooks/useAxios";
import { UserType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useUserApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getUser = (): UseQueryResult<UserType[]> => {
    return useQuery<UserType[]>({
      queryKey: [queryKeys.USER_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_USER);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const getUserData = (id: string): UseQueryResult<UserType> => {
    return useQuery<UserType>({
      queryKey: [queryKeys.USER_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_USER.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: true, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addUser = async (
    userData: Partial<UserType>
  ): Promise<ApiResponseType<UserType>> => {
    const response = await instance.post(apiUrls.GET_ADD_USER, userData);
    return response.data.data;
  };

  const addUserMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<UserType>) => addUser(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.USER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateUserData = async (
    updateUserData: Partial<UserType>
  ): Promise<ApiResponseType<UserType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_USER.replace("{id}", "" + updateUserData.id),
      updateUserData
    );
    return response.data.data;
  };

  const updateUserMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<UserType>) => updateUserData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.USER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteUser = async (id: string): Promise<ApiResponseType<UserType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_USER.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteUserMutation = () => {
    const mutation = useMutation((id: string) => deleteUser(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.USER_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getUser,
    getUserData,
    addUserMutation,
    updateUserMutation,
    deleteUserMutation,
  };
};
