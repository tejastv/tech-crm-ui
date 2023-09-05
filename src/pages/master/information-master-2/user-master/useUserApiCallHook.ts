import { useAxios } from "@hooks/useAxios";
import { AddUpdateUserType, UserType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useUserApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getUser = () => {
    return useQuery<UserType[]>({
      queryKey: [queryKeys.USER_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_USER);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const getUserData = (id: string) => {
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
    userData: AddUpdateUserType
  ): Promise<ApiResponseType<UserType>> => {
    const response = await instance.post(apiUrls.GET_ADD_USER, userData);
    return response.data.data;
  };

  const addUserMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateUserType) => addUser(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.USER_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateUserData = async (
    updateUserData: AddUpdateUserType
  ): Promise<ApiResponseType<UserType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_USER.replace("{id}", "" + updateUserData.id),
      updateUserData
    );
    return response.data.data;
  };

  const updateUserMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateUserType) => updateUserData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
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
      onSuccess: () => {
        queryClient.invalidateQueries({
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
