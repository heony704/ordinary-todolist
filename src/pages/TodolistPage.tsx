import React from 'react';

import MainLayout from 'src/containers/MainLayout';
import TodoRerender from 'src/containers/TodoRerender';

export default function TodolistPage() {
  return (
    <MainLayout>
      <TodoRerender />
    </MainLayout>
  );
}
