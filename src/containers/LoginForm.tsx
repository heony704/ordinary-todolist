import React from 'react';

import useAlert from 'src/hooks/useAlert';
import useFormState from 'src/hooks/useFormState';

import { login } from 'src/api/authorize';
import { saveToken } from 'src/utils/accessToken';
import { isEmailValid, isPasswordValid } from 'src/utils/validate';

import Form from 'src/components/Form';

export default function LoginForm() {
  const [loginForm, handleInputChange, resetForm] = useFormState({
    email: '',
    password: '',
  });

  const [Alert, alert] = useAlert();

  const handleSubmit = async () => {
    try {
      const response = await login(loginForm.email, loginForm.password);
      saveToken(response.access_token);
      window.location.reload();
    } catch (error) {
      alert(
        '로그인 실패',
        '비밀번호가 일치하지 않거나 회원 정보가 존재하지 않습니다. \n 다시 로그인해주세요.',
      );
      resetForm();
    }
  };

  return (
    <div className="flex w-full justify-center">
      <Alert />
      <Form title="Login to your account" onSubmit={handleSubmit}>
        <Form.Input
          name="email"
          type="email"
          label="Your email"
          placeholder="name@company.com"
          value={loginForm.email}
          onChange={handleInputChange}
          isValid={isEmailValid(loginForm.email)}
          errorText="이메일 형식이 적합하지 않습니다."
        />
        <Form.Input
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={loginForm.password}
          onChange={handleInputChange}
          isValid={isPasswordValid(loginForm.password)}
          errorText="영문자, 숫자 포함 8자 이상 작성해주세요."
        />
        <Form.Button
          text="Sign in"
          disabled={
            !isEmailValid(loginForm.email) ||
            !isPasswordValid(loginForm.password)
          }
        />
        <Form.Helper
          helpText="Don’t have an account yet?"
          navigateText="Sign up"
          navigatePath="/register"
        />
      </Form>
    </div>
  );
}
