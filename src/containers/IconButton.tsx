import React from 'react';

type IconButtonProps = {
  onClick: () => void;
  ariaLabel: string;
  children: React.ReactNode;
};

export default function IconButton({
  onClick,
  ariaLabel,
  children,
}: IconButtonProps) {
  return (
    <button
      type="button"
      className="rounded-lg ml-auto -mx-1.5 -my-1.5 p-1.5 flex justify-center items-center h-8 w-8 focus:ring-1 focus:ring-gray-300 text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-500 dark:hover:bg-gray-600 dark:hover:text-white"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
