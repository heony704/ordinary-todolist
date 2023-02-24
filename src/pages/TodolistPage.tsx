import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthRouting from 'src/hooks/useAuthRouting';
import { removeToken } from 'src/utils/token';
import Logo from 'src/components/Logo';
import TodoList from 'src/components/TodoList';
import TodoInput from 'src/components/TodoInput';

export default function TodolistPage() {
  useAuthRouting();

  const navigate = useNavigate();
  const logout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center px-6 pt-6 pb-10 max-w-3xl mx-auto">
      <div className="flex justify-between items-center w-full">
        <Logo />
        <button
          type="button"
          className="button-rounded-sm button-gray"
          onClick={logout}
        >
          Logout
        </button>
      </div>
      <TodoInput />
      <TodoList />
    </div>
  );
}
