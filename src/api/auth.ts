import { fetchInstance } from './fetchInstance';

export const login = async (email: string, password: string) => {
  try {
    const response = await fetchInstance.post('/auth/signin', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await fetchInstance.post('/auth/signup', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
