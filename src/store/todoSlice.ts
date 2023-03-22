import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types/data";

interface ITodoState {
  list: ITodo[],
}

const initialState: ITodoState = {
  list: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodoDispatch(state, action: PayloadAction<string>) {
      state.list.push({
        id: Date.now(),
        title: action.payload.trim(),
        complete: false
      })
    },
    removeTodoDispatch(state, action: PayloadAction<number>) {
      state.list = state.list.filter(item => item.id !== action.payload)
    },
    setCompleteDispatch(state, action: PayloadAction<number>) {
      const findTodo = state.list.find(item => item.id === action.payload);
      if (findTodo){
        findTodo.complete = !findTodo?.complete;
      }
    },
  }
})
export const { addTodoDispatch, removeTodoDispatch, setCompleteDispatch } = todoSlice.actions;
export default todoSlice.reducer;