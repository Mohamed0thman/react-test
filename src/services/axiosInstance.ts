import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

import { cookieClient } from "./";

const API_URI = process.env.REACT_APP_API_URI;

const noAuthAxios = axios.create({
  baseURL: API_URI,
  timeout: 3000,
});

// axios isntancte that intercept authentication
const axiosInstance = axios.create({
  baseURL: API_URI,
  timeout: 3000,
});

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = cookieClient.getCookie("access_token");
  config.headers["auth-token"] = `Bearer ${accessToken}`;

  const accessTokenDecoded = jwt_decode(accessToken);
  const isExpired = dayjs.unix(accessTokenDecoded.exp).diff(dayjs()) < 1;

  if (!isExpired) return config;

  const refreshToken = cookieClient.getCookie("refresh_token");

  const response = await axios.post(`${API_URI}/refresh_token`, {
    refresh_token: refreshToken,
  });

  if (response.status === 401 || response.status === 403) {
    console.log("expired refresh token");
  }

  cookieClient.setCookie("access_token", response.data.accessToken);

  config.headers["auth-token"] = `Bearer ${response.data.accessToken}`;

  return config;
});

export { axiosInstance, noAuthAxios };
