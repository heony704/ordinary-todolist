import React from 'react';

import useAlert from 'src/hooks/useAlert';

import { login } from 'src/api/authorize';
import { saveToken } from 'src/utils/accessToken';
import { isEmailValid, isPasswordValid } from 'src/utils/validate';

import Form from 'src/components/Form';

import CenteredLayout from 'src/containers/CenteredLayout';

export default function LoginPage() {
  const [Alert, alert] = useAlert();

  const handleSubmit = async (inputs: any) => {
    try {
      const response = await login(inputs.email, inputs.password);
      saveToken(response.access_token);
      window.location.reload();
    } catch (error) {
      alert(
        '로그인 실패',
        '비밀번호가 일치하지 않거나 회원 정보가 존재하지 않습니다. \n 다시 로그인해주세요.',
      );
      throw error;
    }
  };

  return (
    <CenteredLayout>
      <Alert />
      <Form onSubmit={handleSubmit}>
        <Form.Title>Login to your account</Form.Title>
        <Form.Item name="email">
          <Form.Label>Your email</Form.Label>
          <Form.Input
            type="email"
            placeholder="name@company.com"
            validate={inputs => isEmailValid(inputs.email)}
          />
          <Form.ValidationGuide>
            이메일 형식이 적합하지 않습니다.
          </Form.ValidationGuide>
        </Form.Item>
        <Form.Item name="password">
          <Form.Label>Password</Form.Label>
          <Form.Input
            type="password"
            placeholder="••••••••"
            validate={inputs => isPasswordValid(inputs.password)}
          />
          <Form.ValidationGuide>
            영문자, 숫자 포함 8자 이상 작성해주세요.
          </Form.ValidationGuide>
        </Form.Item>
        <Form.Button>Sign in</Form.Button>
        <Form.Helper>
          Don’t have an account yet?
          <Form.HelperLink to="/register">Sign up</Form.HelperLink>
        </Form.Helper>
      </Form>
    </CenteredLayout>
  );
}
