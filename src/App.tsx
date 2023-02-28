import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage';
import AuthPage from './pages/AuthPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route element={<AuthPage />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
