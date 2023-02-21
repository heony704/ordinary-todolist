import { useState } from 'react';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type InputChangeHandler = (event: InputChangeEvent) => void;

const useFormState = <T>(initialValue: T): [T, InputChangeHandler] => {
  const [formState, setFormState] = useState(initialValue);

  function handleInputChange(event: InputChangeEvent) {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  }

  return [formState, handleInputChange];
};

export default useFormState;
