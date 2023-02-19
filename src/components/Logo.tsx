import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center text-2xl font-semibold text-gray-900 select-none dark:text-white"
    >
      Todolist
    </Link>
  );
}
