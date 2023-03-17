import React, { useState, useEffect } from 'react';
import Todo from 'src/components/Todo';
import { getTodos } from 'src/api/handleTodo';

export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
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
