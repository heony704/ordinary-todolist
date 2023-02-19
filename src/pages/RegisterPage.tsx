import React from 'react';
import Form, { FormInput, FormHelper } from 'src/components/Form';

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        Todolist
      </div>
      <Form
        title="Create and account"
        buttonText="Create an account"
        helperComponent={
          <FormHelper
            helpText="Already have an account?"
            navigateText="Login here"
            navigatePath="/login"
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
        <FormInput
          name="confirm-password"
          type="password"
          label="Confirm password"
          placeholder="••••••••"
        />
      </Form>
    </div>
  );
}
