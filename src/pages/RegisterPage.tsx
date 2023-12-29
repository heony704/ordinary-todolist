import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from 'src/constants/routes';

import useAlert from 'src/hooks/useAlert';

import { register } from 'src/api/authorize';
import {
  isEmailValid,
  isPasswordMatch,
  isPasswordValid,
} from 'src/utils/validate';

import Form from 'src/components/Form';

import CenteredLayout from 'src/containers/CenteredLayout';

export default function RegisterPage() {
  const [Alert, alert] = useAlert();
  const navigate = useNavigate();

  const handleSubmit = async (inputs: any) => {
    try {
      await register(inputs.email, inputs.password);
      navigate(LOGIN);
    } catch (error) {
      alert(
        '회원가입 실패',
        '이미 가입된 이메일입니다. \n 해당 이메일로 로그인하거나 다른 이메일로 가입해주세요.',
      );
    }
  };

  return (
    <CenteredLayout>
      <Alert />
      <Form onSubmit={handleSubmit}>
        <Form.Title>Create and account</Form.Title>
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
        <Form.Item name="confirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Input
            type="password"
            placeholder="••••••••"
            validate={inputs =>
              isPasswordMatch(inputs.password, inputs.confirmPassword)
            }
          />
          <Form.ValidationGuide>
            비밀번호가 일치하지 않습니다.
          </Form.ValidationGuide>
        </Form.Item>
        <Form.Button>Create an account</Form.Button>
        <Form.Helper>
          Already have an account?
          <Form.HelperLink to={LOGIN}>Login here</Form.HelperLink>
        </Form.Helper>
      </Form>
    </CenteredLayout>
  );
}
