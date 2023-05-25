import React, { useState, useEffect } from 'react';
import Todo from 'src/components/Todo';
import { getTodos } from 'src/api/handleTodo';

type TodoListComponent = {
  rerenderFlag: boolean;
  rerender: () => void;
};

export default function TodoList({
  rerenderFlag,
  rerender,
}: TodoListComponent) {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTodoList() {
      try {
        setTodoList(await getTodos());
      } catch {
        setError(true);
      }
    }
    fetchTodoList();
  }, [rerenderFlag]);

  return (
    <div className="w-full mt-10 space-y-6">
      {error ? (
        <div className="flex w-full justify-center text-center text-black leading-10">
          오류로 인해 TodoList를 가져올 수 없습니다.
          <br />
          다시 시도해주세요.
        </div>
      ) : (
        todoList
          .slice(0)
          .reverse()
          .map(todo => (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              isCompleted={todo.isCompleted}
              rerenderTodoList={rerender}
            />
          ))
      )}
    </div>
  );
}
