import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useAuth, useToaster } from ".";

import { STATUS_CODES } from "@constants/util-constant";

export const useAxios = () => {
  const navigate = useNavigate();
  const { removeItem } = useLocalStorage();
  const { user } = useAuth();
  const { errorMessageToaster, successMessageToaster } = useToaster();

  const defaultBaseUrl = `${import.meta.env.VITE_BASE_URL}`;
  const transactionMasterBaseUrl = `${import.meta.env.VITE_BASE_URL_TRANSACTION_MASTER}`;

  const instance = axios.create({
    baseURL: defaultBaseUrl,
  });

  instance.interceptors.request.use(
    async (config) => {
      if (user && user.authToken) {
        config.headers["Authorization"] = "Bearer " + user.authToken;
      }
      config.headers["Content-Type"] = "application/json";

      if (config.headers["callFrom"] === "transaction") {
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
      // console.log(response);
      if (
        response.status == STATUS_CODES.CODE_200 &&
        response.config.method == "delete"
      ) {
        successMessageToaster("Deleted Successfully..!");
      }
      if (response.status == STATUS_CODES.CODE_201) {
        successMessageToaster("Added Successfully..!");
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
      if (error.response?.status === STATUS_CODES.CODE_401) {
        removeItem("user");
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return { instance };
};
