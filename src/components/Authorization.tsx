import React, { useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { getTodos } from 'src/api/handleTodo';

export default function Authorization() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTodoList() {
      try {
        await getTodos();
        if (location.pathname !== '/') navigate('/');
      } catch {
        if (location.pathname === '/') navigate('/login');
      }
    }
    fetchTodoList();
  }, []);

  return <Outlet />;
}
