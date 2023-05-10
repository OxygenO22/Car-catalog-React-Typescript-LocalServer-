import { FC } from "react";
import styles from "./ToDo.module.scss";
import { useAppDispatch } from '../../hooks/useTypedSelector'; 
import { deleteTodo, toggleStatus } from "../../../store/toDoSlice/todoSlice";
import { IAddTodo } from './TodoTypes';

export const TodoItem: FC<IAddTodo> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  return (
    <li className={styles.todo__item}>
      <input
        className={styles.todo__checkbox}
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span className={styles.todo__text}>{title}</span>
      <span
        className={styles.todo__remove}
        onClick={() => dispatch(deleteTodo(id))} 
      >
        &times;
      </span>
    </li>
  );
};
