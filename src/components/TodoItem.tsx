import React from 'react';
import { useAppDispatch } from '../hooksRedux';
import { removeTodoDispatch, setCompleteDispatch } from '../store/todoSlice';
import { ITodo } from '../types/data';

export const TodoItem: React.FC<ITodo> = (props) => {
  const { id, title, complete } = props;
  const dispatch = useAppDispatch();

  const removeTodo = () => {
    dispatch(removeTodoDispatch(id));
  }
  const setComplete = () => {
    dispatch(setCompleteDispatch(id));
  }
  return (
    <div>
      <input type="checkbox" checked={complete} onChange={setComplete} />
      {title}
      <button onClick={removeTodo}>X</button>
    </div>
  );
};
