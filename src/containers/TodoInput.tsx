import React, { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';

import useRerender from 'src/hooks/useRerender';
import useToast from 'src/hooks/useToast';

import { createTodo } from 'src/api/handleTodo';

function TodoInput() {
  const [newTodo, setNewTodo] = useState('');
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const [Toast, toast] = useToast();

  const { rerender } = useRerender();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (newTodo.trim() === '') {
      toast('빈 내용입니다. 내용을 입력해주세요.');
      return;
    }

    try {
      await createTodo(newTodo);
      setNewTodo('');
      rerender();
    } catch (error) {
      toast('오류가 발생했습니다. 다시 시도해주세요.');
      setTimeout(() => window.location.reload(), 1500);
    }
  };

  return (
    <>
      <Toast />
      <form className="relative w-full mt-6" onSubmit={handleSubmit}>
        <input
          className="block p-2.5 pr-[3.3rem] w-full text-sm border rounded-lg focus:outline-none focus:ring-1 text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-600"
          placeholder="Input todos..."
          value={newTodo}
          onChange={handleChangeInput}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium rounded-r-lg focus:outline-none focus:ring-2 border bg-primary-600 hover:bg-primary-700 disabled:bg-primary-600/50 border-primary-600 text-white focus:ring-primary-300 dark:disabled:text-gray-400 dark:focus:ring-primary-800"
          aria-label="submit"
        >
          <HiOutlineChevronDown className="w-5 h-5" />
        </button>
      </form>
    </>
  );
}

export default React.memo(TodoInput);
