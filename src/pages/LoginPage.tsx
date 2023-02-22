import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Logo from 'src/components/Logo';
import LoginForm from 'src/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 space-y-6 mx-auto md:h-screen lg:py-0">
      <Logo />
      <LoginForm />
    </div>
  );
}
