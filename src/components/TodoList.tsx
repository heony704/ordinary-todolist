import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Todo from 'src/components/Todo';
import { getTodos } from 'src/api/handleTodo';
import { getToken } from 'src/utils/accessToken';

export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!getToken()) {
      navigate('/login');
      return;
    }

    async function fetchTodoList() {
      setTodoList(await getTodos());
    }
    fetchTodoList();
  });

  return (
    <div className="w-full mt-10 space-y-6">
      {todoList
        .slice(0)
        .reverse()
        .map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
          />
        ))}
    </div>
  );
}
