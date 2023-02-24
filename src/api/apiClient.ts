import axios from 'axios';

const BASE_URL = 'https://pre-onboarding-selection-task.shop';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

apiClient.interceptors.response.use(
  config => config,
  error => Promise.reject(error),
);

export default apiClient;
