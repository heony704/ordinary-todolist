import React, { useEffect, useState } from 'react';

import { getTodos } from 'src/api/handleTodo';

import Spinner from 'src/components/Spinner';

import Todo from 'src/containers/Todo';

type TodoListProps = {
  rerenderFlag: boolean;
  rerender: () => void;
};

export default function TodoList({ rerenderFlag, rerender }: TodoListProps) {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTodos()
      .then(data => {
        setTodoList(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [rerenderFlag]);

  if (loading)
    return (
      <div className="mt-16">
        <Spinner />
      </div>
    );

  return (
    <div className="w-full mt-10 space-y-6">
      {error ? (
        <div className="flex w-full justify-center text-center text-gray-900 dark:text-white leading-10">
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
