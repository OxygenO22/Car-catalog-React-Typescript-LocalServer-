import React, { useEffect, useState } from "react";
import styles from "./ToDo.module.scss";
import { MainTitle } from "../../ui/title/MainTitle";
import { RouteButton } from "../../ui/buttons/RouteButton";
import { TodoList } from "./TodoList";
import { InputField } from "./InputField";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, fetchTodos } from "../../../store/toDoSlice/todoSlice";

export const ToDo = () => {
  const [title, setText] = useState("");
  const {status, error} = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const addTask = () => {
    title && dispatch(addNewTodo(title));
    setText("");
  };

  useEffect(()=> {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <MainTitle name="To Do List (Redux Toolkit)" />
      <RouteButton path="/" name="Back" />
      <div>
        <div className={styles.todo__inputWrapper}>
          <InputField
            title={title}
            handleSubmit={addTask}
            handleInput={setText}
          />
        </div>
        <div className={styles.todo__wrapper}>
          {status === "loading" && <h2 className={styles.todo__loading}>Loading...</h2>}
          {error && <h2 className={styles.todo__error}>An error occured: {error}</h2>}
          <TodoList />
        </div>
      </div>
    </div>
  );
};
