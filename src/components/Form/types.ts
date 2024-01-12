export type Input = Record<string, string>;
export type Valid = Record<string, boolean>;

export type FormState = {
  inputs: Input;
  valids: Valid;
  setInput: (name: string, value: string) => void;
  setValid: (name: string, isValid: boolean) => void;
  resetForm: () => void;
};

export type DefaultFormState = null;
