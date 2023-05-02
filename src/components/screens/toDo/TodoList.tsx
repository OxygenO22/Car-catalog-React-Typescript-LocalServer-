import React from 'react'
import { TodoItem } from './TodoItem';
import { IAddTodo } from './TodoTypes';
import styles from "./ToDo.module.scss";
import { useSelector } from 'react-redux';


export const TodoList = () => {
  const todos = useSelector((state: any) => state.todos.todos);
  return (
    <ul className={styles.todo__items}>
      {todos.map((todo: 
      IAddTodo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
}
