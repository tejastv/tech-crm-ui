import { useAxios } from "@hooks/useAxios";
import { CityFormType, CityType } from "@master/index";
import { apiUrls, queryKeys } from "@constants/index";
import { ApiResponseType } from "@shared/index";
import {
  QueryClient,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { selectOptionsMapMaker } from "@utils/selectOptionsMaker";
import { ReceiptType } from "..";

export const useReceiptApiCallHook = () => {
  const { instance } = useAxios();
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  const getCity = (): UseQueryResult<{ [key: string | number]: CityType }> => {
    return useQuery<{ [key: string | number]: CityType }>({
      queryKey: [queryKeys.CITY_DATA],
      queryFn: async () => {
        const response = await instance.get(apiUrls.GET_ADD_CITY);
        const data = response.data.data.sort(
          (a: { cityName: string }, b: { cityName: any }) =>
            a.cityName.localeCompare(b.cityName)
        );
        let mapedData = selectOptionsMapMaker(data, "cityId", "cityName");
        return mapedData;
      },
      staleTime: Infinity,
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const getReceiptData = (
    startYear: string,
    invoiceNo: string,
    condition?: boolean
  ): UseQueryResult<any> => {
    return useQuery<any>({
      queryKey: [queryKeys.RECEIPT_DATA, startYear, invoiceNo],
      queryFn: async () => {
        const response = await instance.get(
          apiUrls.GET_RECEIPT.replace("{startYear}", startYear),
          {
            params: {
              invoice_no: invoiceNo,
            },
            headers: {
              callFrom: "receipt",
            },
          }
        );
        return response.data.data;
      },
      enabled: condition, // Query is initially enabled
      refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    });
  };

  const addCity = async (
    cityData: CityFormType
  ): Promise<ApiResponseType<CityType>> => {
    const response = await instance.post(apiUrls.GET_ADD_CITY, cityData);
    return response.data.data;
  };

  const addCityMutation = () => {
    const mutation = useMutation(
      (updatedItem: CityFormType) => addCity(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.CITY_DATA],
          });
          navigate("..");
        },
      }
    );
    return mutation;
  };

  const addUpdateDeleteReceiptData = async (
    updateReceiptData: any
  ): Promise<ApiResponseType<any>> => {
    const response = await instance.post(
      apiUrls.ADD_UPDATE_DELETE_RECEIPT.replace(
        "{clientId}",
        "" + updateReceiptData.clientId
      )
        .replace("{fYear}", "" + updateReceiptData.fYear)
        .replace("{invoiceNo}", "" + updateReceiptData.invoiceNo),
      updateReceiptData.receipts,
      {
        headers: {
          callFrom: "receipt",
        },
      }
    );
    return response.data.data;
  };

  const addUpdateDeleteReceiptMutation = () => {
    const mutation = useMutation(
      (updatedItem: any) => addUpdateDeleteReceiptData(updatedItem),
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: [queryKeys.RECEIPT_DATA],
          });
          // navigate("..");
        },
      }
    );
    return mutation;
  };

  const deleteCity = async (id: string): Promise<ApiResponseType<CityType>> => {
    const response = await instance.delete(
      apiUrls.GET_UPDATE_DELETE_CITY.replace("{id}", id)
    );
    return response.data.data;
  };

  const deleteCityMutation = () => {
    const mutation = useMutation((id: string) => deleteCity(id), {
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: [queryKeys.CITY_DATA],
        });
      },
    });
    return mutation;
  };

  return {
    getCity,
    getReceiptData,
    addCityMutation,
    addUpdateDeleteReceiptMutation,
    deleteCityMutation,
  };
};
