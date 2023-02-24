import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo } from 'src/api/todo';
import { HiOutlineChevronDown } from 'react-icons/hi';

export default function TodoInput() {
  const [newTodo, setNewTodo] = useState('');
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createTodo(newTodo);
      setNewTodo('');
    } catch (error) {
      navigate('/login');
    }
  };

  return (
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
  );
}
