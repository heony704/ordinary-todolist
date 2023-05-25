import React from 'react';
import { HiExclamation } from 'react-icons/hi';

type ToastType = {
  text: string;
  onClose: () => void;
};

export default function Toast({ text, onClose }: ToastType) {
  return (
    <div
      className="animate-toast opacity-0 fixed inset-0 z-20 bg-black/20 select-none pt-16"
      onAnimationEnd={onClose}
    >
      <div
        className="m-auto flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
          <HiExclamation className="w-5 h-5" />
        </div>
        <div className="ml-3 text-sm font-normal">{text}</div>
      </div>
    </div>
  );
}
