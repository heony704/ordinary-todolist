import React from 'react';
import { HiX } from 'react-icons/hi';
import { deleteTodo } from 'src/api/todo';

export default function Todo({
  id,
  todo,
  isCompleted,
}: Pick<Todo, 'id' | 'todo' | 'isCompleted'>) {
  const handleClick = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex w-full p-2.5 text-sm text-black todo-rounded todo-white ">
      <pre className="truncate">{todo}</pre>
      {isCompleted}
      <button type="button" className="icon-button" onClick={handleClick}>
        <HiX />
      </button>
    </div>
  );
}
