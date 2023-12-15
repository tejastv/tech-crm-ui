import { useAxios } from "@hooks/useAxios";
import { SiteStatusType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useSiteStatusApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getSiteStatus = (): UseQueryResult<Array<SiteStatusType>> => {
    return useQuery<Array<SiteStatusType>>({
      queryKey: [queryKeys.SITE_STATUS_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_SITE_STATUS);
        const data = response.data.data.sort(
          (a: { siteStatus: string }, b: { siteStatus: any }) =>
            a.siteStatus.localeCompare(b.siteStatus)
        );
        return data;
      },
      staleTime: Infinity,
    });
  };

  const getSiteStatusData = (
    id: string,
    condition: boolean
  ): UseQueryResult<SiteStatusType> => {
    return useQuery<SiteStatusType>({
      queryKey: [queryKeys.SITE_STATUS_DATA, id],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_UPDATE_DELETE_SITE_STATUS.replace("{id}", id)
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addSiteStatus = async (
    siteStatusData: Partial<SiteStatusType>
  ): Promise<ApiResponseType<SiteStatusType>> => {
    const response = await instance.post(
      apiUrls.GET_ADD_SITE_STATUS,
      siteStatusData
    );
    return response.data.data;
  };

  const addSiteStatusMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<SiteStatusType>) => addSiteStatus(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.SITE_STATUS_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const updateSiteStatusData = async (
    updateSiteStatusData: Partial<SiteStatusType>
  ): Promise<ApiResponseType<SiteStatusType>> => {
    const response = await instance.put(
      apiUrls.GET_UPDATE_DELETE_SITE_STATUS.replace(
        "{id}",
        "" + updateSiteStatusData.id
      ),
      updateSiteStatusData
    );
    return response.data.data;
  };

  const updateSiteStatusMutation = () => {
    const mutation = useMutation(
      (updatedItem: Partial<SiteStatusType>) =>
        updateSiteStatusData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.SITE_STATUS_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteSiteStatus = async (
    id: string
  ): Promise<ApiResponseType<SiteStatusType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_SITE_STATUS.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteSiteStatusMutation = () => {
    const mutation = useMutation((id: string) => deleteSiteStatus(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.SITE_STATUS_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getSiteStatus,
    getSiteStatusData,
    addSiteStatusMutation,
    updateSiteStatusMutation,
    deleteSiteStatusMutation,
  };
};
