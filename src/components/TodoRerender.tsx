import React, { useState, useCallback } from 'react';
import TodoList from 'src/components/TodoList';
import TodoInput from 'src/components/TodoInput';

export default function TodoRerender() {
  const [rerenderFlag, setRerenderFlag] = useState(false);
  const rerender = useCallback(() => {
    setRerenderFlag(prevRerenderFlag => !prevRerenderFlag);
  }, []);

  return (
    <>
      <TodoInput rerender={rerender} />
      <TodoList rerenderFlag={rerenderFlag} rerender={rerender} />
    </>
  );
}
