import axios from 'axios';
import { getToken } from 'src/utils/token';

const BASE_URL = 'https://pre-onboarding-selection-task.shop';

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
