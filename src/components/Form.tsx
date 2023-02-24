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
    <div className="w-full card-rounded card-white md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
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
      <label htmlFor={name} className="block text-sm font-medium text-black">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`${
          !validationVisible ? 'input-gray' : 'input-red'
        } input-rounded block w-full p-2.5 sm:text-sm`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={startValidation}
      />
      {validationVisible && (
        <div className="absolute">
          <p className="relative text-sm text-red">{errorText}</p>
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
      className="button-rounded-lg button-primary"
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
    <p className="text-sm text-gray font-light select-none">
      {helpText}
      {navigateText !== '' && (
        <Link
          to={navigatePath}
          className="font-medium text-primary hover:underline pl-1"
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
