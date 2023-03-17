import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authorization from 'src/components/Authorization';
import TodolistPage from 'src/pages/TodolistPage';
import AuthPage from 'src/pages/AuthPage';
import LoginForm from 'src/components/LoginForm';
import RegisterForm from 'src/components/RegisterForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Authorization />}>
          <Route path="/" element={<TodolistPage />} />
          <Route element={<AuthPage />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
