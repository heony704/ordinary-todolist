import { useNavigate } from 'react-router-dom';
import { authenticateUser, addUser } from '../api/auth';

export const useLogin = () => {
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const response = await authenticateUser(email, password);
      localStorage.setItem('access_token', response.access_token);
      navigate('/');
    } catch (error) {
      alert('wrong login !');
    }
  };

  return login;
};

export const useRegister = () => {
  const navigate = useNavigate();

  const register = async (email: string, password: string) => {
    try {
      await addUser(email, password);
      navigate('/login');
    } catch (error) {
      alert('wrong register');
    }
  };

  return register;
};

export const useLogout = () => {
  const logout = () => {
    localStorage.removeItem('access_token');
  };

  return logout;
};
