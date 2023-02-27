import axios from 'axios';

const BASE_URL = 'https://pre-onboarding-selection-task.shop';

const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email: string, password: string) => {
  try {
    const response = await authAxios.post('/auth/signin', { email, password });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await authAxios.post('/auth/signup', { email, password });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
