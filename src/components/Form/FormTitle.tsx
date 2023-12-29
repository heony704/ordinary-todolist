import React from 'react';

type FormTitleProps = {
  children: React.ReactNode;
};

export default function FormTitle({ children }: FormTitleProps) {
  return (
    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
      {children}
    </h1>
  );
}
