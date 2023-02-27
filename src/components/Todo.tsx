import React, { useState } from 'react';
import { HiX, HiPencil, HiTrash, HiCheck } from 'react-icons/hi';
import { deleteTodo, updateTodo } from 'src/api/todo';

export default function Todo({
  id,
  todo,
  isCompleted,
}: Pick<Todo, 'id' | 'todo' | 'isCompleted'>) {
  const [editMode, setEditMode] = useState(false);
  const [todoValue, setTodoValue] = useState(todo);
  const handleTodoValueChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTodoValue(event.target.value);
  };

  const cancelEdit = () => {
    setEditMode(false);
    setTodoValue(todo);
  };

  const editTodo = async () => {
    const trimmedValue = todoValue.trim();
    await updateTodo(id, trimmedValue, isCompleted);
    setEditMode(false);
    setTodoValue(trimmedValue);
  };

  if (!editMode) {
    return (
      <div className={`${isCompleted && 'toggled'} todo todo-white`}>
        <pre className="truncate flex-1 whitespace-pre-wrap">{todo}</pre>
        <button
          type="button"
          className="icon-button"
          onClick={() => setEditMode(true)}
        >
          <HiPencil />
        </button>
        <button
          type="button"
          className="icon-button"
          onClick={() => deleteTodo(id)}
        >
          <HiTrash />
        </button>
      </div>
    );
  }
  return (
    <div className={`${isCompleted && 'toggled'} todo todo-white`}>
      <textarea
        className="flex-1 rounded-sm px-1 mr-1 resize-none dark:bg-gray-600 focus:outline-none"
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
