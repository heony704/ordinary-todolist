import React from 'react';

type FormLabelProps = {
  name?: string;
  children: React.ReactNode;
};

export default function FormLabel({
  name = undefined,
  children,
}: FormLabelProps) {
  if (name === undefined)
    throw new Error(
      'Form Label은 Form Item의 바로 하위 컴포넌트로 위치해야 합니다.',
    );

  return (
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-900 dark:text-white"
    >
      {children}
    </label>
  );
}
