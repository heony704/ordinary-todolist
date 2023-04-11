import axios from 'axios';
import { getToken } from 'src/utils/accessToken';

const BASE_URL = 'http://43.201.130.34:8000';

const fetchInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchInstanceWithToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

fetchInstanceWithToken.interceptors.request.use(
  config => {
    const newConfig = config;
    newConfig.headers.Authorization = `Bearer ${getToken()}`;

    return newConfig;
  },
  error => Promise.reject(error),
);

export { fetchInstance, fetchInstanceWithToken };
