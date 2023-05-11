import { TodoItem } from "./TodoItem";
import { IAddTodo } from "./TodoTypes";
import styles from "./ToDo.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { selectTodosByFilter } from "../../../store/toDoSlice/selectors";


export const TodoList = () => {
  const todos = useTypedSelector(selectTodosByFilter);
  return (
    <ul className={styles.todo__items}>
      {todos.map((todo: IAddTodo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
}
