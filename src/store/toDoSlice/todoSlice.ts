import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { IAddTodo, ITodosState } from "../../components/screens/toDo/TodoTypes";
import { TODOS_URL } from "../../constants";

export const fetchTodos = createAsyncThunk<IAddTodo[], undefined, {rejectValue: string}>(
  "todos/fetchTodos",
  async function(_, {rejectWithValue}) {
    const response = await fetch(TODOS_URL);
    if (!response.ok) {
      return rejectWithValue("Server error!");
    }
    const data = await response.json();
    return data;
  }
);

export const deleteTodo = createAsyncThunk<string, string, {rejectValue: string}>(
  "todos/deleteTodo",
  async function(id, {rejectWithValue}) {
    
      const response = await fetch(TODOS_URL + `/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        return rejectWithValue("Can't delete task. Server error!");
      }
      return id;
  }
);

export const toggleStatus = createAsyncThunk<IAddTodo, number, {rejectValue: string, state: {todos: ITodosState}}>(
  "todos/toggleStatus",
  async function(id, {rejectWithValue, getState}) {
    const todo = getState().todos.list.find(todo => todo.id === id);
      if (todo) {
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
        return rejectWithValue("Can't toggle status. Server error!");
      }
      return (await response.json()) as IAddTodo;
    }
    return rejectWithValue("No such todo in the list!"); 
  }
);

export const addNewTodo = createAsyncThunk<IAddTodo, string, {rejectValue: string, state: {todos: ITodosState}}>(
  "todos/addNewTodo",
  async function(title, {rejectWithValue, getState}) {
    const todosId = getState().todos.list.map(item => item.id);
    
      const todo: IAddTodo = {
        userId: 1,
        id: Math.max(...todosId) + 1,
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
        return rejectWithValue("Can't add task. Server error!");
      }
      return (await response.json()) as IAddTodo;
  }
);

const initialState: ITodosState = {
  list: [],
  loading: false,
  error: null
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(addNewTodo.pending, (state) => {
        state.error = null;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(toggleStatus.fulfilled, (state, action) => {
        const toggledTodo = state.list.find(todo => todo.id === action.payload.id);
        if (toggledTodo) {
          toggledTodo.completed = !toggledTodo.completed;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter(todo => todo.id !== action.payload);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      })
  } 
});
export default todoSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}