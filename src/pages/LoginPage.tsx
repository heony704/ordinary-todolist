import React, { useState } from 'react';
import Logo from 'src/components/Logo';
import Form, { FormInput, FormButton, FormHelper } from 'src/components/Form';
import { useLogin } from 'src/hooks/useAuth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = useLogin();

  const handleSubmit = () => {
    login(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 space-y-6 mx-auto md:h-screen lg:py-0">
      <Logo />
      <Form title="Login to your account" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Your email"
          placeholder="name@company.com"
          value={email}
          onChange={handleChangeEmail}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={handleChangePassword}
        />
        <FormButton text="Sign in" />
        <FormHelper
          helpText="Don’t have an account yet?"
          navigateText="Sign up"
          navigatePath="/register"
        />
      </Form>
    </div>
  );
}
