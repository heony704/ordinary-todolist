import React, { createContext, useContext, useMemo, useState } from 'react';

import { DefaultFormState, FormState, Input, Valid } from './types';

const defaultFormContext = null;

const FormContext = createContext<FormState | DefaultFormState>(
  defaultFormContext,
);

type FormContextProviderProps = {
  children: React.ReactNode;
};
export function FormContextProvider({ children }: FormContextProviderProps) {
  const [inputs, setInputs] = useState<Input>({});
  const setInput = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const [valids, setValids] = useState<Valid>({});
  const setValid = (name: string, isValid: boolean | null) => {
    setValids(prev => ({ ...prev, [name]: isValid }));
  };

  const resetForm = () => {
    setInputs({});
    setValids({});
  };

  const value = {
    inputs,
    valids,
    setInput,
    setValid,
    resetForm,
  };
  const memoizedValue = useMemo(
    () => value,
    [inputs, valids, setInput, setValid, resetForm],
  );

  return (
    <FormContext.Provider value={memoizedValue}>
      {children}
    </FormContext.Provider>
  );
}

function filterOutDefault<T>(context: DefaultFormState | T): T {
  if (context === null)
    throw new Error('이 값은 Form 컴포넌트 외부에서 사용할 수 없습니다.');
  return context;
}

export const useFormInputs = () => {
  const formContext = useContext(FormContext);
  const { inputs, setInput } = filterOutDefault(formContext);
  return { inputs, setInput };
};

export const useFormValids = () => {
  const formContext = useContext(FormContext);
  const { valids, setValid } = filterOutDefault(formContext);
  return { valids, setValid };
};

export const useForm = () => {
  const formContext = useContext(FormContext);
  const { resetForm } = filterOutDefault(formContext);
  return { resetForm };
};
