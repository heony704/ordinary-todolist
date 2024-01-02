import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { HiCheck, HiPencil, HiTrash, HiX } from 'react-icons/hi';

import useRerender from 'src/hooks/useRerender';
import useToast from 'src/hooks/useToast';

import { deleteTodo, updateTodo } from 'src/api/handleTodo';

import Button from 'src/components/Button';

type IconButtonProps = {
  onClick: () => void;
  label: string;
  Svg: IconType;
};

function IconButton({ onClick, label, Svg }: IconButtonProps) {
  return (
    <Button
      onClick={onClick}
      label={label}
      styles={{ border: false, shape: 'square', color: 'gray' }}
    >
      <Svg className="h-4 w-4" />
    </Button>
  );
}

type TodoProps = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

export default function Todo({ id, todo, isCompleted }: TodoProps) {
  const [editMode, setEditMode] = useState(false);
  const [todoValue, setTodoValue] = useState(todo);
  const handleTodoValueChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTodoValue(event.target.value);
  };

  const [Toast, toast] = useToast();

  const { rerender } = useRerender();

  const toggle = async () => {
    try {
      await updateTodo(id, todo, !isCompleted);
      rerender();
    } catch {
      toast('오류가 발생했습니다. 다시 시도해주세요.');
      setTimeout(() => window.location.reload(), 1500);
    }
  };

  const cancelEdit = async () => {
    setEditMode(false);
    setTodoValue(todo);
  };

  const editTodo = async () => {
    const trimmedValue = todoValue.trim();
    if (trimmedValue !== todo) {
      try {
        await updateTodo(id, trimmedValue, isCompleted);
        rerender();
      } catch {
        toast('오류가 발생했습니다. 다시 시도해주세요.');
        setTimeout(() => window.location.reload(), 1500);
      }
    }
    setEditMode(false);
    setTodoValue(trimmedValue);
  };

  const removeTodo = async () => {
    try {
      await deleteTodo(id);
      rerender();
    } catch {
      toast('오류가 발생했습니다. 다시 시도해주세요.');
      setTimeout(() => window.location.reload(), 1500);
    }
  };

  return (
    <>
      <Toast />
      <div
        className={`${
          isCompleted
            ? 'line-through bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-600 dark:border-gray-700'
            : 'bg-white text-gray-900 dark:bg-gray-700 dark:text-white dark:border-gray-600'
        } rounded-lg flex items-center w-full p-2.5 space-x-1 text-sm border border-gray-300`}
      >
        {editMode ? (
          <>
            <textarea
              className={`${
                isCompleted && 'dark:text-gray-400'
              } flex-1 rounded-sm px-1 bg-gray-100 dark:bg-gray-600 resize-none focus:outline-none`}
              value={todoValue}
              onChange={handleTodoValueChange}
            >
              {todo}
            </textarea>
            <IconButton onClick={editTodo} label="confirm" Svg={HiCheck} />
            <IconButton onClick={cancelEdit} label="cancel" Svg={HiX} />
          </>
        ) : (
          <>
            <pre
              className="truncate flex-1 px-1 whitespace-pre-wrap cursor-pointer"
              role="presentation"
              onClick={toggle}
            >
              {todo}
            </pre>
            <IconButton
              onClick={() => setEditMode(true)}
              label="edit"
              Svg={HiPencil}
            />
            <IconButton onClick={removeTodo} label="delete" Svg={HiTrash} />
          </>
        )}
      </div>
    </>
  );
}
