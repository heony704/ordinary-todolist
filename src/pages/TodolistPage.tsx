import React from 'react';
import { Link } from 'react-router-dom';
import useAuthRouting from 'src/hooks/useAuthRouting';
import LogoutButton from 'src/components/LogoutButton';
import TodoList from 'src/components/TodoList';
import TodoInput from 'src/components/TodoInput';

export default function TodolistPage() {
  useAuthRouting();

  return (
    <div className="flex flex-col items-center px-6 pt-6 pb-10 max-w-3xl mx-auto">
      <div className="flex justify-between items-center w-full">
        <Link
          to="/"
          className="flex items-center text-2xl font-semibold text-black select-none"
        >
          Todolist
        </Link>
        <LogoutButton />
      </div>
      <TodoInput />
      <TodoList />
    </div>
  );
}
