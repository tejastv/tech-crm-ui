import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useAuth } from ".";
import { Loader, Toaster } from "@shared/index";

export const useAxios = () => {
  const navigate = useNavigate();
  const { removeItem } = useLocalStorage();
  const { user } = useAuth();

  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
  });

  instance.interceptors.request.use(
    async (config) => {
      <Loader isVisible={true} />;
      if (user && user.authToken) {
        config.headers["Authorization"] = "Bearer " + user.authToken;
      }
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => {
      <Loader isVisible={false} />;
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      <Loader isVisible={false} />;
      return response;
    },
    (error) => {
      <Loader isVisible={false} />;
      console.log(error.response?.status);
      if (error.response?.status === 400) {
        <Toaster
          type="Danger"
          heading="Error"
          description={error.response?.data.error}
        />;
      }
      if (error.response?.status === 401) {
        removeItem("user");
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return { instance };
};
