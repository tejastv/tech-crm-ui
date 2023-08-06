import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useAuth } from '.';

export const useAxios = () => {
    const navigate = useNavigate();
    const { removeItem } = useLocalStorage();
    const { user } = useAuth();

    const instance = axios.create({
        baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api/`,
    });

    instance.interceptors.request.use(
        async (config) => {
            if (user && user.authToken) {
                config.headers['Authorization'] = 'Bearer ' + user.authToken;
            }
            config.headers['Content-Type'] = 'application/json';
            return config;
        },
        (error) => Promise.reject(error),
    );

    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                removeItem('user');
                navigate('/login');
            }
            return Promise.reject(error);
        },
    );

    return { instance };
};
