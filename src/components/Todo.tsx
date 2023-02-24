import React from 'react';

export default function Todo({ contents }: Todo) {
  return (
    <div className="flex w-full p-2.5 text-sm text-black todo-rounded todo-white ">
      <pre>{contents}</pre>
    </div>
  );
}
