import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Spinner from 'src/components/Spinner';

import Authorization from 'src/containers/Authorization';

const TodolistPage = lazy(() => import('src/pages/TodolistPage'));
const LoginPage = lazy(() => import('src/pages/LoginPage'));
const RegisterPage = lazy(() => import('src/pages/RegisterPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="h-screen">
            <Spinner />
          </div>
        }
      >
        <Routes>
          <Route element={<Authorization />}>
            <Route path="/" element={<TodolistPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
