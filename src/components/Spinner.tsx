import React from 'react';
import { ImSpinner8 } from 'react-icons/im';

export default function Spinner() {
  return (
    <div>
      <ImSpinner8 className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
    </div>
  );
}
