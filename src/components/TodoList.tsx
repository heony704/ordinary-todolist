import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Todo from 'src/components/Todo';
import { getTodos } from 'src/api/todo';
import { getToken } from 'src/utils/token';

export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) navigate('/login');

    async function fetchTodoList() {
      setTodoList(await getTodos());
    }
    fetchTodoList();
  }, [todoList]);

  return (
    <div className="w-full mt-10 space-y-6">
      {todoList
        .slice(0)
        .reverse()
        .map(todo => (
          <Todo todo={todo.todo} isCompleted={todo.isCompleted} key={todo.id} />
        ))}
    </div>
  );
}
