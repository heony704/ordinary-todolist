import React from 'react';
import Todo from '../components/Todo';

export default function TodolistPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        Todolist
      </div>
      <form className="space-y-4 md:space-y-6">
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
        />
      </form>
      <div>
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
}
