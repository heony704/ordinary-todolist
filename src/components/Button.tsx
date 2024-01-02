import React from 'react';

type ButtonStyle = {
  border: boolean;
  shape: 'square' | 'long';
  color: 'gray' | 'primary';
};

type ButtonProps = {
  onClick: () => void;
  label: string;
  styles: ButtonStyle;
  children: React.ReactNode;
};

const styleCss = {
  base: 'rounded-lg focus:ring-1 font-medium text-sm  flex justify-center items-center',

  border:
    'border focus:outline-none border-gray-200 focus:border-blue-500 dark:border-gray-600',

  square: 'p-1.5',
  long: 'py-1.5 px-2.5',

  gray: 'text-gray-400 focus:ring-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-500 dark:hover:bg-gray-600 dark:hover:text-white',
  primary:
    'bg-gray-50 text-gray-900 focus:text-blue-700 focus:ring-blue-500 hover:bg-gray-100 hover:text-primary-600 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
};

export default function Button({
  onClick,
  label,
  styles,
  children,
}: ButtonProps) {
  const baseStyle = styleCss.base;
  const borderStyle = styles.border ? styleCss.border : '';
  const shapeStyle = styleCss[styles.shape];
  const colorStyle = styleCss[styles.color];

  const buttonStyle = `${baseStyle} ${borderStyle} ${shapeStyle} ${colorStyle}`;

  return (
    <button
      type="button"
      className={buttonStyle}
      onClick={onClick}
      aria-label={label}
    >
      {children}
    </button>
  );
}
