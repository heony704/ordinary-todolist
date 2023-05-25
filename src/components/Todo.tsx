import React, { useState } from 'react';
import { HiX, HiPencil, HiTrash, HiCheck } from 'react-icons/hi';
import { deleteTodo, updateTodo } from 'src/api/handleTodo';
import useToast from 'src/hooks/useToast';

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

  const [Toast, toast] = useToast();

  const toggle = async () => {
    try {
      await updateTodo(id, todo, !isCompleted);
      rerenderTodoList();
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
        rerenderTodoList();
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
      rerenderTodoList();
    } catch {
      toast('오류가 발생했습니다. 다시 시도해주세요.');
      setTimeout(() => window.location.reload(), 1500);
    }
  };

  return (
    <>
      <Toast />
      <div className={`${isCompleted && 'toggled'} todo todo-white`}>
        {editMode ? (
          <>
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
          </>
        )}
      </div>
    </>
  );

  // if (!editMode) {
  //   return (
  //     <div className={`${isCompleted && 'toggled'} todo todo-white`}>
  //       <pre
  //         className="truncate flex-1 px-1 whitespace-pre-wrap cursor-pointer"
  //         role="presentation"
  //         onClick={toggle}
  //       >
  //         {todo}
  //       </pre>
  //       <button
  //         type="button"
  //         className="icon-button"
  //         onClick={() => setEditMode(true)}
  //       >
  //         <HiPencil />
  //       </button>
  //       <button type="button" className="icon-button" onClick={removeTodo}>
  //         <HiTrash />
  //       </button>
  //     </div>
  //   );
  // }
  // return (
  //   <div className={`${isCompleted && 'toggled'} todo todo-white`}>
  //     <textarea
  //       className={`${
  //         isCompleted && 'dark:text-gray-400'
  //       } flex-1 rounded-sm px-1 mr-1 bg-gray-100 dark:bg-gray-600`}
  //       value={todoValue}
  //       onChange={handleTodoValueChange}
  //     >
  //       {todo}
  //     </textarea>
  //     <button type="button" className="icon-button" onClick={editTodo}>
  //       <HiCheck />
  //     </button>
  //     <button type="button" className="icon-button" onClick={cancelEdit}>
  //       <HiX />
  //     </button>
  //   </div>
  // );
}
