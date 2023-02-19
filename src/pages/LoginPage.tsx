import React from 'react';
import Form, { FormInput, FormHelper } from 'src/components/Form';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        Todolist
      </div>
      <Form
        title="Login to your account"
        buttonText="Sign in"
        helperComponent={
          <FormHelper
            helpText="Don’t have an account yet?"
            navigateText="Sign up"
            navigatePath="/register"
          />
        }
      >
        <FormInput
          name="email"
          type="email"
          label="Your email"
          placeholder="name@company.com"
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
        />
      </Form>
    </div>
  );
}
