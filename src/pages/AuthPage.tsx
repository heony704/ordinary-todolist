import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function AuthPage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 space-y-6 mx-auto md:h-screen lg:py-0">
      <Link
        to="/"
        className="flex items-center text-2xl font-semibold text-black select-none"
      >
        Todolist
      </Link>
      <Outlet />
    </div>
  );
}
