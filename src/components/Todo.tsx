import React from 'react';

export default function Todo({ contents }: Todo) {
  return (
    <div className="flex w-full p-2.5 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 dark:bg-gray-700  dark:border-gray-600 dark:text-white">
      <pre>{contents}</pre>
    </div>
  );
}
