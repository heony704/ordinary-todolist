import React from 'react';

export default function Todo({
  todo,
  isCompleted,
}: Pick<Todo, 'todo' | 'isCompleted'>) {
  return (
    <div className="flex w-full p-2.5 text-sm text-black todo-rounded todo-white ">
      <pre>{todo}</pre>
      {isCompleted}
    </div>
  );
}
