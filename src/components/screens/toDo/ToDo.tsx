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
  }

  return (
    <div>
      <MainTitle name="To Do List (Redux Toolkit)" />
      <RouteButton path="/" name="Back" />
      <div>
        <label>
          <Input
            placeholder="Add to do"
            value={text}
            onChange={(e: any) => setText(e.target?.value)}
          />
          <Button onClick={addTodo} name="Add To Do" />
        </label>
        <ul>
          {todos.map((todo: IAddTodo) => (
            <li key={todo.id}>
              <Input type="checkbox" />
              <span>{todo.text}</span>
              <span>&times;</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};