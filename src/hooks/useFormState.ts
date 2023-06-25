import { useCallback, useState } from 'react';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type InputChangeHandler = (event: InputChangeEvent) => void;

export default function useFormState<T>(
  initialValue: T,
): [T, InputChangeHandler, () => void] {
  const [formState, setFormState] = useState(initialValue);

  const handleInputChange = useCallback((event: InputChangeEvent) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  }, []);

  function resetForm() {
    setFormState(initialValue);
  }

  return [formState, handleInputChange, resetForm];
}
