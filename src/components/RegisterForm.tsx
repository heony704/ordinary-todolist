import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'src/components/Form';
import useFormState from 'src/hooks/useFormState';
import useAlert from 'src/hooks/useAlert';
import { register } from 'src/api/authorize';
import {
  isEmailValid,
  isPasswordValid,
  isPasswordMatch,
} from 'src/utils/validate';

export default function RegisterForm() {
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
    <div className="flex w-full justify-center">
      <Alert />
      <Form title="Create and account" onSubmit={handleSubmit}>
        <Form.Input
          name="email"
          type="email"
          label="Your email"
          placeholder="name@company.com"
          value={registerForm.email}
          onChange={handleInputChange}
          isValid={isEmailValid(registerForm.email)}
          errorText="이메일 형식이 적합하지 않습니다."
        />
        <Form.Input
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={registerForm.password}
          onChange={handleInputChange}
          isValid={isPasswordValid(registerForm.password)}
          errorText="영문자, 숫자 포함 8자 이상 작성해주세요."
        />
        <Form.Input
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="••••••••"
          value={registerForm.confirmPassword}
          onChange={handleInputChange}
          isValid={isPasswordMatch(
            registerForm.password,
            registerForm.confirmPassword,
          )}
          errorText="비밀번호가 일치하지 않습니다."
        />
        <Form.Button
          text="Create an account"
          disabled={
            !isEmailValid(registerForm.email) ||
            !isPasswordValid(registerForm.password) ||
            !isPasswordMatch(
              registerForm.password,
              registerForm.confirmPassword,
            )
          }
        />
        <Form.Helper
          helpText="Already have an account?"
          navigateText="Login here"
          navigatePath="/login"
        />
      </Form>
    </div>
  );
}
