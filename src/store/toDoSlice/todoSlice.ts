import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IAddTodo } from "../../components/screens/toDo/TodoTypes";
import { TODOS_URL } from "../../constants";

export const fetchTodos: any = createAsyncThunk(
  "todos/fetchTodos",
  async function(_, {rejectWithValue}) {
    try {
      const response = await fetch(TODOS_URL);
      if (!response.ok) {
        throw new Error("Server error!");
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodo: any = createAsyncThunk(
  "todos/deleteTodo",
  async function(id, {rejectWithValue, dispatch}) {
    try {
      const response = await fetch(TODOS_URL + `/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error("Can't delete task. Server error!");
      }
      dispatch(removeTodo({id}));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleStatus: any = createAsyncThunk(
  "todos/toggleStatus",
  async function(id, {rejectWithValue, dispatch, getState}: any) {
    const todo: IAddTodo = getState().todos.todos.find((todo: any) => todo.id === id);
    try {
      const response = await fetch(TODOS_URL + `/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          completed: !todo.completed
        })
      });
      if (!response.ok) {
        throw new Error("Can't toggle status. Server error!");
      }
      dispatch(toggleTodoComplete({id}));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewTodo: any = createAsyncThunk(
  "todos/addNewTodo",
  async function(title: string, {rejectWithValue, dispatch, getState}: any) {
    const todos = getState().todos.todos.map((item: any) => item.id);
    try {
      const todo: IAddTodo = {
        userId: 1,
        id: Math.max(...todos) + 1,
        title: title,
        completed: false
      }

      const response = await fetch(TODOS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
      });
      if (!response.ok) {
        throw new Error("Can't add task. Server error!");
      }
      const data = await response.json();
      dispatch(addTodo(data));
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state: any, action: any) => {
  state.status = "rejected";
  state.error = action.payload;
}

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: <IAddTodo[]> [],
    status: <string | null> null,
    error: <string | null> null
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggledTodo: any = state.todos.find(todo => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: setError,
    [deleteTodo.rejected]: setError,
    [toggleStatus.rejected]: setError,
  }
});

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;