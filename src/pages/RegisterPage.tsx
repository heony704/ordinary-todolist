import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from 'src/components/Logo';
import Form from 'src/components/Form';
import useFormState from 'src/hooks/useFormState';
import useAlert from 'src/hooks/useAlert';
import { register } from 'src/api/auth';

export default function RegisterPage() {
  const [registerForm, handleInputChange, resetForm] = useFormState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [Alert, alert] = useAlert();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await register(registerForm.email, registerForm.password);
      navigate('/login');
    } catch (error) {
      alert(
        '회원가입 실패',
        '이미 가입된 이메일입니다. \n 해당 이메일로 로그인하거나 다른 이메일로 가입해주세요.',
      );
      resetForm();
    }
  };

  return (
    <>
      <Alert />
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
    </>
  );
}
