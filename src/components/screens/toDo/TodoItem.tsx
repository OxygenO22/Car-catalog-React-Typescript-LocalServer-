import React, { FC } from 'react'
import styles from "./ToDo.module.scss";
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../../../store/toDoSlice/todoSlice';

interface ITodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export const TodoItem: FC<ITodoItem> = ({ id, text, completed}) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.todo__item}>
      <input
        className={styles.todo__checkbox}
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({id}))}
      />
      <span className={styles.todo__text}>{text}</span>
      <span
        className={styles.todo__remove}
        onClick={() => dispatch(removeTodo({id}))}
      >
        &times;
      </span>
    </li>
  );
};
