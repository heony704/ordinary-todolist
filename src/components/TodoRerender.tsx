import React, { useCallback, useState } from 'react';

import TodoInput from 'src/components/TodoInput';
import TodoList from 'src/components/TodoList';

export default function TodoRerender() {
  const [rerenderFlag, setRerenderFlag] = useState(false);
  const rerender = useCallback(() => {
    setRerenderFlag(prevRerenderFlag => !prevRerenderFlag);
  }, []);

  return (
    <main className="w-full flex flex-col">
      <TodoInput rerender={rerender} />
      <TodoList rerenderFlag={rerenderFlag} rerender={rerender} />
    </main>
  );
}
