import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';

import { cookieClient } from './cookieClient';

type AccessToken = {
  exp: number;
};

const API_URI = process.env.REACT_APP_API_URI;

const axiosClient = axios.create({
  baseURL: API_URI,
  timeout: 3000,
});

axiosClient.interceptors.request.use(async (config) => {
  const savedAccessToken: string | null =
    cookieClient.getCookie('access_token');

  if (savedAccessToken === null) return config;

  config.headers = {
    'auth-token': `Bearer ${savedAccessToken}`,
  };

  const decodedAccessToken = jwt_decode<AccessToken>(savedAccessToken);
  console.log(decodedAccessToken);
  const isExpired = dayjs.unix(decodedAccessToken.exp).diff(dayjs()) < 1;

  if (!isExpired) return config;

  const refreshToken = cookieClient.getCookie('refresh_token');

  const response = await axios.post(`${API_URI}/refresh_token`, {
    refresh_token: refreshToken,
  });

  if (response.status === 401 || response.status === 403) {
    console.log('expired refresh token');
  }

  cookieClient.setCookie('access_token', response.data.accessToken);

  config.headers['auth-token'] = `Bearer ${response.data.accessToken}`;

  return config;
});

export default axiosClient;
