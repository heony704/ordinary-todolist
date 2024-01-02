import React from 'react';

import Rerender from 'src/components/Rerender';

import MainLayout from 'src/containers/MainLayout';
import TodoInput from 'src/containers/TodoInput';
import TodoList from 'src/containers/TodoList';

export default function TodolistPage() {
  return (
    <MainLayout>
      <Rerender>
        <TodoInput />
        <TodoList />
      </Rerender>
    </MainLayout>
  );
}
