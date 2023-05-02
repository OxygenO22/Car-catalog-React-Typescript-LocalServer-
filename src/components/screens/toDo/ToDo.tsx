import React, { useState } from "react";
import styles from "./ToDo.module.scss";
import { MainTitle } from "../../ui/title/MainTitle";
import { RouteButton } from "../../ui/buttons/RouteButton";
import { IAddTodo } from "./TodoTypes";
import { TodoList } from "./TodoList";
import { InputField } from "./InputField";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/toDoSlice/todoSlice";

export const ToDo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    text && dispatch(addTodo({text}));
    setText("");
  };

  return (
    <div>
      <MainTitle name="To Do List (Redux Toolkit)" />
      <RouteButton path="/" name="Back" />
      <div>
        <div className={styles.todo__inputWrapper}>
          <InputField
            text={text}
            handleSubmit={addTask}
            handleInput={setText}
          />
        </div>
        <div className={styles.todo__wrapper}>
          <TodoList />
        </div>
      </div>
    </div>
  );
};
