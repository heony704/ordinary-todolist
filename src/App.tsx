import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Authorization from 'src/components/Authorization';
import Spinner from 'src/components/Spinner';

const AuthPage = lazy(() => import('src/pages/AuthPage'));
const TodolistPage = lazy(() => import('src/pages/TodolistPage'));
const LoginForm = lazy(() => import('src/components/LoginForm'));
const RegisterForm = lazy(() => import('src/components/RegisterForm'));

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
            <Route element={<AuthPage />}>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
