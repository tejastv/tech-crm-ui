import { useAxios } from "@hooks/useAxios";
import { AddUpdateClientType, ClientType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType, PaginationType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useClientApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getClient = (): UseQueryResult<ClientType[]> => {
    return useQuery<ClientType[]>({
      queryKey: [queryKeys.CLIENT_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_CLIENT);
        return response.data.data.records;
      },
      staleTime: Infinity,
    });
  };

  const getClientData = (
    id: string,
    condition: any = true
  ): UseQueryResult<ClientType> => {
    return useQuery<ClientType>({
      queryKey: [queryKeys.CLIENT_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_CLIENT.replace("{id}", "" + id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addClient = async (
    clientData: AddUpdateClientType
  ): Promise<ApiResponseType<ClientType>> => {
    const response = await instance.post(apiUrls.GET_ADD_CLIENT, clientData);
    return response.data.data;
  };

  const addClientMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateClientType) => addClient(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.CLIENT_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateClientData = async (
    updateClientData: AddUpdateClientType
  ): Promise<ApiResponseType<ClientType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_CLIENT.replace(
        "{id}",
        "" + updateClientData.id
      ),
      updateClientData
    );
    return response.data.data;
  };

  const updateClientMutation = () => {
    const mutation = useMutation(
      (updatedItem: AddUpdateClientType) => updateClientData(updatedItem),
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [queryKeys.CLIENT_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteClient = async (
    id: string
  ): Promise<ApiResponseType<ClientType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_CLIENT.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteClientMutation = () => {
    const mutation = useMutation((id: string) => deleteClient(id), {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [queryKeys.CLIENT_DATA],
        });
      },
    });
    return mutation;
  };

  const getClientsByCityId = (
    filterObj: any,
    condition: any
  ): UseQueryResult<PaginationType<ClientType[]>> => {
    let queryParam = new URLSearchParams(filterObj).toString();
    let URL = `${apiUrls.GET_CLIENT_BY_CITY_ID}?${queryParam}`;
    return useQuery<PaginationType<ClientType[]>>({
      queryKey: [queryKeys.CITY_WISE_CLIENT_DATA],
      queryFn: async () => {
        const response = await instance.get(URL);
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  return {
    getClient,
    getClientData,
    addClientMutation,
    updateClientMutation,
    deleteClientMutation,
    getClientsByCityId,
  };
};
