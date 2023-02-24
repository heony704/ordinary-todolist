import React from 'react';
import { HiExclamationCircle } from 'react-icons/hi';

type AlertType = {
  title: string;
  contents: string;
  onConfirm: () => void;
};

export default function Alert({ title, contents, onConfirm }: AlertType) {
  return (
    <div className="bg-black/30 fixed inset-0 z-20 overflow-hidden flex w-screen h-screen">
      <div
        role="alert"
        className="w-96 p-4 m-auto flex flex-col card-rounded card-red"
      >
        <div className="flex items-center">
          <HiExclamationCircle className="w-5 h-5 mr-2" />
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
        <p className="mt-2 mb-4 text-sm whitespace-pre-line">{contents}</p>
        <button
          type="button"
          onClick={onConfirm}
          className="font-medium rounded-lg text-xs px-4 py-1.5 text-center ml-auto button-red"
        >
          확인
        </button>
      </div>
    </div>
  );
}
