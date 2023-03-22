import React from 'react';
import { Filter } from './components/Filter';
import { TodoList } from './components/TodoList';

export const App: React.FC = () => {

  return (
    <>
      <Filter />
      <TodoList />
    </>
  );
};
