import { TodoItem } from "./TodoItem";
import { IAddTodo } from "./TodoTypes";
import styles from "./ToDo.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";


export const TodoList = () => {
  const todos = useTypedSelector(state => state.todos.list);
  return (
    <ul className={styles.todo__items}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
}
