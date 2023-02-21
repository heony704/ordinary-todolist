import React from 'react';
import Logo from 'src/components/Logo';
import Form, { FormInput, FormButton, FormHelper } from 'src/components/Form';
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
        <FormInput
          name="email"
          type="email"
          label="Your email"
          placeholder="name@company.com"
          value={registerForm.email}
          onChange={handleInputChange}
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={registerForm.password}
          onChange={handleInputChange}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="••••••••"
          value={registerForm.confirmPassword}
          onChange={handleInputChange}
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
