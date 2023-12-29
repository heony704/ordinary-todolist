import React from 'react';

import { useFormValids } from './Context';

type FormButtonProps = {
  children: React.ReactNode;
};

export default function FormButton({ children }: FormButtonProps) {
  const { valids } = useFormValids();

  const isAnyInvalid =
    Object.values(valids).includes(null) ||
    Object.values(valids).includes(false);

  return (
    <button
      type="submit"
      disabled={isAnyInvalid}
      className="w-full px-5 py-2.5 rounded-lg font-medium text-sm text-center focus:outline-none focus:ring-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-600/50 text-white focus:ring-primary-300 dark:disabled:text-gray-400 dark:focus:ring-primary-800"
    >
      {children}
    </button>
  );
}
