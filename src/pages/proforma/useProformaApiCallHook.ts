import { apiUrls, queryKeys } from "@constants/index";
import { useAxios } from "@hooks/useAxios";
import { UseQueryResult, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GeneratePiType } from ".";
import { ApiResponseType } from "@shared/index";

export const useProformaApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = useQueryClient();
  // const navigate = useNavigate();

  const callFormConfig = {
    headers: {
      callFrom: "transaction",
    },
  };

  const getEnquiryPi = (): UseQueryResult<Array<GeneratePiType>> => {
    return useQuery<Array<GeneratePiType>>({
      queryKey: [queryKeys.GET_ENQUIRY_PI],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ENQUIRY_PI, callFormConfig);
        return response.data.data;
      },
      staleTime: Infinity,
    });
  };

  const deleteProforma = async (id: string): Promise<ApiResponseType<GeneratePiType>> => {
    const response = await instance.delete(
      apiUrls.UPDATE_DELETE_ENQUIRY_PI.replace("{id}", id),
      callFormConfig
    );
    return response.data.data;
  };

  const deleteProformaMutation = () => {
    const mutation = useMutation((id: string) => deleteProforma(id), {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [queryKeys.GET_ENQUIRY_PI] });
      },
    });
    return mutation;
  };

  return {
    getEnquiryPi,
    deleteProformaMutation
  };
};
