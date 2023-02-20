import React, { useState } from 'react';
import Logo from 'src/components/Logo';
import Form, { FormInput, FormButton, FormHelper } from 'src/components/Form';
import { useRegister } from 'src/hooks/useAuth';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(event.target.value);
  };

  const register = useRegister();

  const handleSubmit = () => {
    register(email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 space-y-6 mx-auto md:h-screen lg:py-0">
      <Logo />
      <Form title="Create and account" onSubmit={handleSubmit}>
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
        <FormInput
          name="confirm-password"
          type="password"
          label="Confirm password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
        />
        <FormButton text="Create an account" />
        <FormHelper
          helpText="Already have an account?"
          navigateText="Login here"
          navigatePath="/login"
        />
      </Form>
    </div>
  );
}
