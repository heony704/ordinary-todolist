import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthPage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 space-y-6 mx-auto md:h-screen lg:py-0">
      <h1 className="flex items-center text-2xl font-semibold text-black select-none">
        Todolist
      </h1>
      <Outlet />
    </div>
  );
}
