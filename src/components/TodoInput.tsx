import React, { useState } from 'react';
import useToast from 'src/hooks/useToast';
import { createTodo } from 'src/api/handleTodo';
import { HiOutlineChevronDown } from 'react-icons/hi';

type TodoInputComponent = {
  rerender: () => void;
};

function TodoInput({ rerender }: TodoInputComponent) {
  const [newTodo, setNewTodo] = useState('');
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const [Toast, toast] = useToast();

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
          className="block p-2.5 pr-[3.3rem] w-full text-sm input-rounded input-white"
          placeholder="Input todos..."
          value={newTodo}
          onChange={handleChangeInput}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2.5 text-sm font-medium rounded-r-lg button-primary border border-primary-600"
        >
          <HiOutlineChevronDown className="w-5 h-5" />
        </button>
      </form>
    </>
  );
}

export default React.memo(TodoInput);
