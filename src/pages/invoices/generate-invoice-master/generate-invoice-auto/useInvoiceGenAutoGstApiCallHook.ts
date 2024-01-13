import { useAxios } from "@hooks/useAxios";
import { apiUrls } from "@constants/index";
import { EnquiriesType } from "@transaction-search/index";

export const useInvoiceGenAutoGstApiCallHook = () => {
  const { instance } = useAxios();
  const headers = {
    callFrom: "transaction",
  };

  const getAllEnquires = async (
    queryParams: any
  ): Promise<EnquiriesType[] | undefined> => {
    if (Object.values(queryParams).length == 0) return;
    let params = {};
    params = {
      params: {
        ...queryParams,
      },
      headers: headers,
    };
    const response = await instance.get(
      apiUrls.GET_ALL_INVOICE_GST_ENQUIRES,
      params
    );
    const data = await response.data.data;
    return data;
  };

  const postAllEnquiresToGenerateGst = async (
    queryParams: any
  ): Promise<string> => {
    if (Object.values(queryParams).length == 0) return '';
    let params = {};
    params = {
      params: {
        fyear: queryParams.fyear,
      },
      headers: headers,
    };
    const response = await instance.post(
      apiUrls.POST_ALL_INVOICE_GST_ENQUIRES,
      queryParams.enqIds,
      params
    );
    const data = await response.data.data;
    return data;
  };

  return {
    getAllEnquires,
    postAllEnquiresToGenerateGst
  };
};
