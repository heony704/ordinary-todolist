import React from 'react';
import Logo from 'src/components/Logo';
import Form from 'src/components/Form';
import useFormState from 'src/hooks/useFormState';
import { useRegister } from 'src/hooks/useAuth';

export default function RegisterPage() {
  const [registerForm, handleInputChange] = useFormState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const register = useRegister();

  const handleSubmit = () => {
    register(registerForm.email, registerForm.password);
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 space-y-6 mx-auto md:h-screen lg:py-0">
      <Logo />
      <Form title="Create and account" onSubmit={handleSubmit}>
        <Form.Input
          name="email"
          type="email"
          label="Your email"
          placeholder="name@company.com"
          value={registerForm.email}
          onChange={handleInputChange}
        />
        <Form.Input
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={registerForm.password}
          onChange={handleInputChange}
        />
        <Form.Input
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="••••••••"
          value={registerForm.confirmPassword}
          onChange={handleInputChange}
        />
        <Form.Button text="Create an account" />
        <Form.Helper
          helpText="Already have an account?"
          navigateText="Login here"
          navigatePath="/login"
        />
      </Form>
    </div>
  );
}
