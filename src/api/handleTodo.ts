import { fetchInstanceWithToken } from 'src/api/fetchInstance';

export const createTodo = async (todo: string) => {
  try {
    const response = await fetchInstanceWithToken.post('/todos', { todo });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTodos = async () => {
  try {
    const response = await fetchInstanceWithToken.get('/todos');
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
    const response = await fetchInstanceWithToken.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await fetchInstanceWithToken.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
