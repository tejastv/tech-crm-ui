import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useAuth, useToaster } from ".";

import { STATUS_CODES } from "@constants/util-constant";
import { apiUrls } from "@constants/index";

export const useAxios = () => {
  const navigate = useNavigate();
  const { removeItem } = useLocalStorage();
  const { user } = useAuth();
  const { errorMessageToaster, successMessageToaster } = useToaster();

  const defaultBaseUrl = `${import.meta.env.VITE_BASE_URL}`;
  const transactionMasterBaseUrl = `${
    import.meta.env.VITE_BASE_URL_TRANSACTION_MASTER
  }`;

  const instance = axios.create({
    baseURL: defaultBaseUrl,
  });

  instance.interceptors.request.use(
    async (config) => {
      if (user && user.authToken) {
        config.headers["Authorization"] = "Bearer " + user.authToken;
      }
      config.headers["Content-Type"] = "application/json";

      if (
        config.headers["callFrom"] === "transaction" ||
        config.headers["callFrom"] === "receipt"
      ) {
        config.baseURL = transactionMasterBaseUrl;
      } else {
        config.baseURL = defaultBaseUrl;
      }
      delete config.headers["callFrom"];
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      console.log(response);
      if (
        response.status == STATUS_CODES.CODE_200 &&
        response.config.method == "delete"
      ) {
        successMessageToaster("Deleted Successfully..!");
      }
      if (response.status == STATUS_CODES.CODE_201 && response.config.url !== apiUrls.POST_ALL_INVOICE_GST_ENQUIRES) {
        successMessageToaster("Saved Successfully..!");
      }
      if (response.status == STATUS_CODES.CODE_202) {
        successMessageToaster("Updated Successfully..!");
      }
      return response;
    },
    (error) => {
      if (error.response?.status === STATUS_CODES.CODE_302) {
        errorMessageToaster(
          error.response?.data.informationMessage,
          "multiple"
        );
      }
      if (error.response?.status === STATUS_CODES.CODE_400) {
        errorMessageToaster(error.response?.data.error, "single");
      }
      if (error.response?.status === STATUS_CODES.CODE_500) {
        errorMessageToaster(error.response?.data.error, "single");
      }
      if (error.response?.status === STATUS_CODES.CODE_404) {
        if (
          error.response.data.informationMessage &&
          error.response.data.informationMessage.length > 0
        ) {
          error.response.data.informationMessage.forEach((err: any) => {
            errorMessageToaster(err.message, "single");
          });
        } else {
          errorMessageToaster(error.response?.data.error, "single");
        }
      }
      if (error.response?.status === STATUS_CODES.CODE_401) {
        removeItem("user");
        navigate("/login");
      } else {
        errorMessageToaster(error.message, "single");
      }
      return Promise.reject(error);
    }
  );

  return { instance };
};
