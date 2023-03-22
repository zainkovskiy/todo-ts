import React from 'react';
import { useAppSelector } from '../hooksRedux';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = (props) => {
  const todos = useAppSelector(state => state.todos.list);

  return (
    <div>
      {
        todos.map(todo => <TodoItem key={todo.id} {...todo}/>)
      }
    </div>
  );
};
