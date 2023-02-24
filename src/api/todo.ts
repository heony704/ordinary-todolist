import { getToken } from 'src/utils/token';
import apiClient from './apiClient';

const Authorization = `Bearer ${getToken()}`;

export const createTodo = async (todo: string) => {
  try {
    const response = await apiClient.post(
      '/todos',
      { todo },
      {
        headers: {
          Authorization,
        },
      },
    );
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTodos = async () => {
  try {
    const response = await apiClient.get('/todos', {
      headers: { Authorization },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
