import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type FormType = {
  title: string;
  onSubmit: () => void;
  children: JSX.Element | JSX.Element[];
};

export default function Form({ title, onSubmit, children }: FormType) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div className="w-full rounded-lg shadow bg-white dark:bg-gray-900 dark:border dark:border-gray-700 md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
          {title}
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

type FormInputType = {
  name: string;
  type: HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  errorText?: string;
};

function FormInput({
  name,
  type,
  label,
  placeholder = '',
  value,
  onChange,
  isValid = true,
  errorText = '',
}: FormInputType) {
  const [validateFlag, setValidateFlag] = useState(false);
  const validationVisible = !isValid && validateFlag;
  const startValidation = () => {
    setValidateFlag(true);
  };

  return (
    <div className="space-y-1 pb-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`${
          !validationVisible
            ? 'text-gray-900 dark:text-white placeholder-gray-400 bg-gray-50 border-gray-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500'
            : 'text-red-500 border-red-500 focus:ring-red-500 focus:border-red-500 bg-red-50 placeholder-red-300 dark:bg-red-700/25 dark:placeholder-red-300/30'
        } border rounded-lg focus:outline-none focus:ring-1 block w-full p-2.5 sm:text-sm`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={startValidation}
      />
      {validationVisible && (
        <div className="absolute">
          <p className="relative text-sm text-red-500">{errorText}</p>
        </div>
      )}
    </div>
  );
}

type FormButtonType = {
  text: string;
  disabled?: boolean;
};

function FormButton({ text, disabled = false }: FormButtonType) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full px-5 py-2.5 rounded-lg font-medium text-sm text-center focus:outline-none focus:ring-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-600/50 text-white focus:ring-primary-300 dark:disabled:text-gray-400 dark:focus:ring-primary-800"
    >
      {text}
    </button>
  );
}

type FormHelperType = {
  helpText: string;
  navigateText?: string;
  navigatePath?: string;
};

function FormHelper({
  helpText,
  navigateText = '',
  navigatePath = '/',
}: FormHelperType) {
  return (
    <p className="text-sm text-gray-500 dark:text-gray-400 font-light select-none">
      {helpText}
      {navigateText !== '' && (
        <Link
          to={navigatePath}
          className="font-medium text-primary-600 dark:text-primary-500 hover:underline pl-1"
        >
          {navigateText}
        </Link>
      )}
    </p>
  );
}

Form.Input = React.memo(FormInput);
Form.Button = React.memo(FormButton);
Form.Helper = React.memo(FormHelper);
