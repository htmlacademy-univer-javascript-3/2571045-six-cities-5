import axios, {AxiosError, AxiosInstance} from 'axios';
import {AuthorizationStatus, BACKEND_URL, REQUEST_TIMEOUT} from '../const.ts';
import {getToken} from '../services/token.ts';
import {requireAuthorization} from '../store/action.ts';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        requireAuthorization(AuthorizationStatus.NoAuth);
      }
      return Promise.reject(error);
    }
  );

  return api;
};
