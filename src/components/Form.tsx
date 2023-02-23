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
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
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
            ? 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600'
            : 'bg-red-50 border-red-500 text-red-500 focus:ring-red-500 focus:border-red-500'
        } border sm:text-sm rounded-lg focus:outline-none focus:ring-1 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={startValidation}
        required
      />
      {validationVisible && (
        <div className="absolute">
          <p className="relative text-sm text-red-600 dark:text-red-500">
            {errorText}
          </p>
        </div>
      )}
    </div>
  );
}

type FormButtonType = {
  text: string;
};

function FormButton({ text }: FormButtonType) {
  return (
    <button
      type="submit"
      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
    <p className="text-sm font-light text-gray-500 select-none dark:text-gray-400">
      {helpText}
      {navigateText !== '' && (
        <Link
          to={navigatePath}
          className="font-medium text-primary-600 hover:underline pl-1 dark:text-primary-500"
        >
          {navigateText}
        </Link>
      )}
    </p>
  );
}

Form.Input = FormInput;
Form.Button = FormButton;
Form.Helper = FormHelper;
