import React, { useEffect, useState } from 'react';

import { useFormInputs, useFormValids } from './Context';
import { Input } from './types';

type FormInputProps = {
  name?: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  validate?: (inputs: Input) => boolean;
};

export default function FormInput({
  name = undefined,
  type,
  placeholder = '',
  validate = undefined,
}: FormInputProps) {
  const { inputs, setInput } = useFormInputs();
  const { valids, setValid } = useFormValids();

  if (name === undefined)
    throw new Error(
      'Form Input은 Form Item의 바로 하위 컴포넌트로 위치해야 합니다.',
    );

  const value = inputs[name] ?? '';
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(name, e.target.value);
  };

  if (validate === undefined)
    return (
      <input
        type={type}
        name={name}
        id={name}
        className="text-gray-900 dark:text-white placeholder-gray-400 bg-gray-50 border-gray-300 focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 border rounded-lg focus:outline-none focus:ring-1 block w-full p-2.5 sm:text-sm"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );

  const isValid = valids[name] ?? true;

  const [validateFlag, setValidateFlag] = useState(false);
  const validationVisible = !isValid && validateFlag;
  const startValidation = () => {
    setValidateFlag(true);
  };

  useEffect(() => {
    setValid(name, null);
  }, []);

  useEffect(() => {
    if (validateFlag) setValid(name, validate(inputs));
  }, [value, validateFlag]);

  return (
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
  );
}
