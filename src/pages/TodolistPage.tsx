import React from 'react';
import Logo from 'src/components/Logo';
import { TbArrowDown } from 'react-icons/tb';
import Todo from '../components/Todo';

export default function TodolistPage() {
  return (
    <div className="flex flex-col items-center px-6 pt-6 max-w-3xl mx-auto">
      <Logo />
      <div className="relative w-full mt-6">
        <input
          className="block p-2.5 pr-[3.3rem] w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Input todos..."
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-primary-600 rounded-r-lg border border-primary-600 hover:bg-primary-700 focus:ring focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          <TbArrowDown className="w-5 h-5" />
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
