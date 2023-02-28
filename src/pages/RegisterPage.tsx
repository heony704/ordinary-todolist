import React from 'react';
import useAuthRouting from 'src/hooks/useAuthRouting';
import Logo from 'src/components/Logo';
import RegisterForm from 'src/components/RegisterForm';

export default function RegisterPage() {
  useAuthRouting();

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 space-y-6 mx-auto md:h-screen lg:py-0">
      <Logo />
      <RegisterForm />
    </div>
  );
}
