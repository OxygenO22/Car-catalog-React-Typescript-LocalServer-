import { useEffect, useState } from "react";
import styles from "./ToDo.module.scss";
import { TodoList } from "./TodoList";
import { InputField } from "./InputField"; 
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import { addNewTodo, fetchTodos } from "../../../store/toDoSlice/todoSlice";
import { Filters } from "./Filters";
import { Header } from "../../ui/header/Header";

export const ToDo = () => {
  const [title, setText] = useState("");
  const { loading, error } = useTypedSelector(state => state.todos);
  const dispatch = useAppDispatch();

  const addTask = () => {
    title && dispatch(addNewTodo(title));
    setText("");
  };

  useEffect(()=> {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <Header  place="todo" />
      <div>
        <div className={styles.todo__inputWrapper}>
          <InputField
            title={title}
            handleSubmit={addTask}
            handleInput={setText}
          />
        </div>
        <Filters />
        <div className={styles.todo__wrapper}>
          {loading && <h2 className={styles.todo__loading}>Loading...</h2>}
          {error && (
            <h2 className={styles.todo__error}>An error occured: {error}</h2>
          )}
          <TodoList />
        </div>
      </div>
    </div>
  );
};
