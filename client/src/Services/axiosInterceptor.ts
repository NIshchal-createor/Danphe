import axios, { AxiosRequestConfig } from "axios";
import { adminLogOut, getAdminAccessTokenFromLocalStorage } from "./helpers";

export const responses = {
  ADMINACCESS: "Admin AccessToken Expired",
} as const;

Object.freeze(responses);
export const BASE_URL = "http://localhost:9494/";
const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  async (config: AxiosRequestConfig | any) => {
    if (config.url !== undefined) {
      if (config.url?.indexOf("admin/login") > -1) {
        return config;
      }
    }

    const adminToken = getAdminAccessTokenFromLocalStorage();
    if (
      config.url?.includes("brand/addbrand") ||
      config.url?.includes("brand/readallbrand") ||
      config.url?.includes("brand/deletebrand")
    ) {
      if (adminToken) {
        if (config.headers !== undefined) {
          config.headers["Authorization"] = "Bearer " + adminToken;
        }
      }
    }
    return config;
  },

  (error) => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      adminLogOut();
      return setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    }
    return Promise.reject(error);
  }
);

export const axiosGet = (uri: string, params: object) =>
  instance.get(uri, params);
export const axiosPost = (uri: string, params: object) =>
  instance.post(uri, params);
export const axiosDelete = (uri: string, params: object) =>
  instance.delete(uri, params);
export const axiosPut = (uri: string, params: object) =>
  instance.put(uri, params);