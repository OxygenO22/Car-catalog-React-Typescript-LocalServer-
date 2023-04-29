import React, { useState } from "react";
import styles from "./ToDo.module.scss";
import { MainTitle } from "../../ui/title/MainTitle";
import { RouteButton } from "../../ui/buttons/RouteButton";
import { Input } from "../../ui/input/Input";
import { Button } from "../../ui/buttons/Button";

interface IAddTodo {
  id: string;
  text: string;
  complete: boolean;
}

export const ToDo = () => {
  const [todos, setTodos] = useState<IAddTodo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          complete: false
        }
      ])
      setText("");
    }
  };

  const removeTodo = (todoId: string) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  };

  return (
    <div>
      <MainTitle name="To Do List (Redux Toolkit)" />
      <RouteButton path="/" name="Back" />
      <div>
        <div className={styles.todo__inputWrapper}>
          <label>
            <Input
              placeholder="Add to do"
              value={text}
              onChange={(e: any) => setText(e.target?.value)}
            />
            <Button onClick={addTodo} name="Add To Do" />
          </label>
        </div>
        <div className={styles.todo__wrapper}>
          <ul>
            {todos.map((todo: IAddTodo) => (
              <li className={styles.todo__item} key={todo.id}>
                <Input type="checkbox" />
                <span className={styles.todo__text}>{todo.text}</span>
                <span
                  className={styles.todo__remove}
                  onClick={() => removeTodo(todo.id)}
                >
                  &times;
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
