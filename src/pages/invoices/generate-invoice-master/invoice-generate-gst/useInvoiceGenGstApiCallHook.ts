import { useAxios } from "@hooks/useAxios";
// import { IndustryType } from "@master/index";
import { apiUrls } from "@constants/index";
import { EnquiriesType } from "@transaction-search/index";
import {
  EnqueryCalculatedDataType,
  SaveInvoiceFormRequestType,
} from "@invoices/index";
// import { ApiResponseType } from "@shared/index";
// import {
//   UseQueryResult,
//   useMutation,
//   useQuery,
//   useQueryClient,
// } from "@tanstack/react-query";
// import { useNavigate } from "react-router-dom";
// import { InvoiceGenGstTableType } from "@invoices/index";
// import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const useInvoiceGenGstApiCallHook = () => {
  const { instance } = useAxios();
  // const queryClient = useQueryClient();
  // const navigate = useNavigate();

  const headers = {
    callFrom: "transaction",
  };

  const getEnquires = async (
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
    let url = apiUrls.GET_ENQ_INVOICE_BASED_ON_CLIENT.replace(
      "{clientId}",
      queryParams.clientId
    );
    const response = await instance.get(url, params);
    const data = await response.data.data;
    return data;
  };

  const getCalculatedDataBasedOnEnquires = async (
    queryParams: any
  ): Promise<EnqueryCalculatedDataType | undefined> => {
    if (Object.values(queryParams).length == 0) return;
    let params = {};
    params = {
      params: {
        finYear: queryParams.finYear,
      },
      headers: headers,
    };
    let url = apiUrls.GET_CALCULATED_DATA_BASED_ON_ENQUIRIES.replace(
      "{clientId}",
      queryParams.client_id
    );
    const response = await instance.post(url, queryParams.enqIds, params);
    const data = await response.data.data;
    return data;
  };

  const saveInoice = async (
    queryParams: SaveInvoiceFormRequestType,
    isPdfRequired: boolean
  ): Promise<EnqueryCalculatedDataType | undefined> => {
    if (Object.values(queryParams).length == 0) return;
    let params = {};
    params = {
      params: {
        isPdfRequired: isPdfRequired ? "true" : "false",
      },
      headers: headers,
    };
    let url = apiUrls.SAVE_INVOICE.replace(
      "{clientId}",
      queryParams.invoiceMasterDto.clientId
    );
    const response = await instance.post(url, queryParams, params);
    const data = await response.data.data;
    return data;
  };

  return {
    getEnquires,
    getCalculatedDataBasedOnEnquires,
    saveInoice,
  };
};
