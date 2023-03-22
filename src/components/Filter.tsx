import React, { useRef, useState, useEffect } from 'react';
import { useAppDispatch } from '../hooksRedux';
import { addTodoDispatch } from '../store/todoSlice';

export const Filter: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  })
  
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  const handlePressKey: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') addTodo()
  }
  const addTodo = () => {
    if (value) {
      dispatch(addTodoDispatch(value));
      setValue('');
    }
  }
  return (
    <div>
      <input value={value} type="text" onChange={handleChange} onKeyDown={handlePressKey} ref={inputRef} />
      <button onClick={addTodo}>add</button>
    </div>
  );
};
