import React, { useState } from 'react';
import { HiX, HiPencil, HiTrash, HiCheck } from 'react-icons/hi';
import { deleteTodo, updateTodo } from 'src/api/handleTodo';

type TodoComponent = {
  id: number;
  todo: string;
  isCompleted: boolean;
  rerenderTodoList?: () => void;
};

export default function Todo({
  id,
  todo,
  isCompleted,
  rerenderTodoList = () => {},
}: TodoComponent) {
  const [editMode, setEditMode] = useState(false);
  const [todoValue, setTodoValue] = useState(todo);
  const handleTodoValueChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTodoValue(event.target.value);
  };

  const toggle = async () => {
    await updateTodo(id, todo, !isCompleted);
    rerenderTodoList();
  };

  const cancelEdit = async () => {
    setEditMode(false);
    setTodoValue(todo);
  };

  const editTodo = async () => {
    const trimmedValue = todoValue.trim();
    if (trimmedValue !== todo) {
      await updateTodo(id, trimmedValue, isCompleted);
      rerenderTodoList();
    }
    setEditMode(false);
    setTodoValue(trimmedValue);
  };

  const removeTodo = async () => {
    await deleteTodo(id);
    rerenderTodoList();
  };

  if (!editMode) {
    return (
      <div className={`${isCompleted && 'toggled'} todo todo-white`}>
        <pre
          className="truncate flex-1 px-1 whitespace-pre-wrap cursor-pointer"
          role="presentation"
          onClick={toggle}
        >
          {todo}
        </pre>
        <button
          type="button"
          className="icon-button"
          onClick={() => setEditMode(true)}
        >
          <HiPencil />
        </button>
        <button type="button" className="icon-button" onClick={removeTodo}>
          <HiTrash />
        </button>
      </div>
    );
  }
  return (
    <div className={`${isCompleted && 'toggled'} todo todo-white`}>
      <textarea
        className={`${
          isCompleted && 'dark:text-gray-400'
        } flex-1 rounded-sm px-1 mr-1 bg-gray-100 dark:bg-gray-600`}
        value={todoValue}
        onChange={handleTodoValueChange}
      >
        {todo}
      </textarea>
      <button type="button" className="icon-button" onClick={editTodo}>
        <HiCheck />
      </button>
      <button type="button" className="icon-button" onClick={cancelEdit}>
        <HiX />
      </button>
    </div>
  );
}
