import React from 'react';
import { Link } from 'react-router-dom';

import LogoutButton from 'src/components/LogoutButton';
import TodoRerender from 'src/components/TodoRerender';

export default function TodolistPage() {
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
      <TodoRerender />
    </div>
  );
}
