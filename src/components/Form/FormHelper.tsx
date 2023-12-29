import React from 'react';

type FormHelperProps = {
  children: React.ReactNode;
};

export default function FormHelper({ children }: FormHelperProps) {
  return (
    <p className="text-sm text-gray-500 dark:text-gray-400 font-light select-none">
      {children}
    </p>
  );
}
