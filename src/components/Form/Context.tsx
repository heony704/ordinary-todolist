import React, { createContext, useContext, useMemo, useState } from 'react';

import { DefaultFormState, FormState, Input, Valid } from './types';

function contextError() {
  return new Error('이 값은 Form 컴포넌트 외부에서 사용할 수 없습니다.');
}

const defaultFormContext = {
  inputs: null,
  valids: null,
  setInput: contextError,
  setValid: contextError,
  resetForm: contextError,
};

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

export const useFormInputs = () => {
  const { inputs, setInput } = useContext(FormContext);
  if (inputs === null)
    throw new Error('이 값은 Form 컴포넌트 외부에서 사용할 수 없습니다.');
  return { inputs, setInput };
};

export const useFormValids = () => {
  const { valids, setValid } = useContext(FormContext);
  if (valids === null)
    throw new Error('이 값은 Form 컴포넌트 외부에서 사용할 수 없습니다.');
  return { valids, setValid };
};

export const useForm = () => {
  const { resetForm } = useContext(FormContext);
  return { resetForm };
};
