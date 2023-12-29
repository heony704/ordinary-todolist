import React from 'react';

import { FormContextProvider, useForm, useFormInputs } from './Context';
import FormButton from './FormButton';
import FormHelper from './FormHelper';
import FormHelperLink from './FormHelperLink';
import FormInput from './FormInput';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import FormTitle from './FormTitle';
import FormValidationGuide from './FormValidationGuide';
import { Input } from './types';

type FormProps = {
  onSubmit: (inputs: Input) => Promise<void>;
  children: React.ReactNode;
};

function Form({ onSubmit, children }: FormProps) {
  const { inputs } = useFormInputs();
  const { resetForm } = useForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(inputs).catch(() => {
      resetForm();
    });
  };

  return (
    <div className="w-full rounded-lg shadow bg-white dark:bg-gray-900 dark:border dark:border-gray-700 md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default function ProvidedForm({ onSubmit, children }: FormProps) {
  return (
    <FormContextProvider>
      <Form onSubmit={onSubmit}>{children}</Form>
    </FormContextProvider>
  );
}

ProvidedForm.Title = React.memo(FormTitle);
ProvidedForm.Item = React.memo(FormItem);
ProvidedForm.Label = React.memo(FormLabel);
ProvidedForm.Input = React.memo(FormInput);
ProvidedForm.ValidationGuide = React.memo(FormValidationGuide);
ProvidedForm.Button = React.memo(FormButton);
ProvidedForm.Helper = React.memo(FormHelper);
ProvidedForm.HelperLink = React.memo(FormHelperLink);
