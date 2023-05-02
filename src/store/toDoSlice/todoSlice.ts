import { createSlice } from "@reduxjs/toolkit";
import { IAddTodo } from "../../components/screens/toDo/TodoTypes";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: <IAddTodo[]> []
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
          id: new Date().toISOString(),
          text: action.payload.text,
          completed: false
        })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggledTodo: any = state.todos.find(todo => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    },
  }
});

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;