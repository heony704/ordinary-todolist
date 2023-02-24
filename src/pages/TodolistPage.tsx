import React from 'react';
import useAuthRouting from 'src/hooks/useAuthRouting';
import Logo from 'src/components/Logo';
import { HiOutlineChevronDown } from 'react-icons/hi';
import Todo from 'src/components/Todo';

export default function TodolistPage() {
  useAuthRouting();

  const logout = () => {
    localStorage.removeItem('access_token');
  };

  return (
    <div className="flex flex-col items-center px-6 pt-6 max-w-3xl mx-auto">
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
      <div className="relative w-full mt-6">
        <input
          className="block p-2.5 pr-[3.3rem] w-full text-sm input-rounded input-white"
          placeholder="Input todos..."
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium rounded-r-lg button-primary border border-primary-600"
        >
          <HiOutlineChevronDown className="w-5 h-5" />
        </button>
      </div>
      <div className="w-full mt-10 space-y-6">
        <Todo contents="todo 1" />
        <Todo contents="todo 2" />
        <Todo contents="todo 3" />
      </div>
    </div>
  );
}
