import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodolistPage from './pages/TodolistPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodolistPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
