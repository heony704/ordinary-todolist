import React from 'react';
import { HiExclamationCircle } from 'react-icons/hi';

type AlertProps = {
  title: string;
  contents: string;
  onConfirm: () => void;
};

export default function Alert({ title, contents, onConfirm }: AlertProps) {
  return (
    <div className="bg-black/30 fixed inset-0 z-20 overflow-hidden flex w-screen h-screen">
      <div
        role="alert"
        className="w-96 p-4 m-auto flex flex-col rounded-lg shadow bg-red-50 text-red-800 dark:bg-gray-800 dark:text-red-400"
      >
        <div className="flex items-center">
          <HiExclamationCircle className="w-5 h-5 mr-2" />
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <p className="mt-2 mb-4 text-sm whitespace-pre-line">{contents}</p>
        <button
          type="button"
          onClick={onConfirm}
          className="font-medium rounded-lg text-xs px-4 py-1.5 text-center ml-auto focus:ring-2 focus:outline-none text-white bg-red-800 hover:bg-red-900 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          확인
        </button>
      </div>
    </div>
  );
}
