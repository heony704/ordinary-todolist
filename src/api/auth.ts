import apiClient from './apiClient';

export const authenticateUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/signin', { email, password });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/signup', { email, password });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
