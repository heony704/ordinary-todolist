import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from 'src/components/Logo';
import Form from 'src/components/Form';
import useFormState from 'src/hooks/useFormState';
import useAlert from 'src/hooks/useAlert';
import { login } from 'src/api/auth';

export default function LoginPage() {
  const [loginForm, handleInputChange, resetForm] = useFormState({
    email: '',
    password: '',
  });

  const [Alert, alert] = useAlert();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await login(loginForm.email, loginForm.password);
      localStorage.setItem('access_token', response.access_token);
      navigate('/');
    } catch (error) {
      alert(
        '로그인 실패',
        '비밀번호가 일치하지 않거나 회원 정보가 존재하지 않습니다. \n 다시 로그인해주세요.',
      );
      resetForm();
    }
  };

  return (
    <>
      <Alert />
      <div className="flex flex-col items-center justify-center px-6 py-8 space-y-6 mx-auto md:h-screen lg:py-0">
        <Logo />
        <Form title="Login to your account" onSubmit={handleSubmit}>
          <Form.Input
            name="email"
            type="email"
            label="Your email"
            placeholder="name@company.com"
            value={loginForm.email}
            onChange={handleInputChange}
          />
          <Form.Input
            name="password"
            type="password"
            label="Password"
            placeholder="••••••••"
            value={loginForm.password}
            onChange={handleInputChange}
          />
          <Form.Button text="Sign in" />
          <Form.Helper
            helpText="Don’t have an account yet?"
            navigateText="Sign up"
            navigatePath="/register"
          />
        </Form>
      </div>
    </>
  );
}
