import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LOGIN, REGISTER } from 'src/constants/routes';

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
            <Route path={LOGIN} element={<LoginPage />} />
            <Route path={REGISTER} element={<RegisterPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
