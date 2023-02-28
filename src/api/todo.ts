import axios from 'axios';
import { getToken } from 'src/utils/token';

const BASE_URL = 'https://pre-onboarding-selection-task.shop';
const authToken = `Bearer ${getToken()}`;

const todoAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: authToken,
  },
});

export const createTodo = async (todo: string) => {
  try {
    const response = await todoAxios.post('/todos', { todo });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTodos = async () => {
  try {
    const response = await todoAxios.get('/todos');
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean,
) => {
  try {
    const response = await todoAxios.put(`/todos/${id}`, { todo, isCompleted });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await todoAxios.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
