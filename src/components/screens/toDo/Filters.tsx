import { useDispatch } from "react-redux";
import { Button } from "../../ui/buttons/Button";
import { changeFilter } from "../../../store/toDoSlice/filterSlice";
import styles from "./Filters.module.scss";

export const Filters = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.filters__wrapper}> 
      <Button name="All" onClick={() => dispatch(changeFilter("all"))} />
      <Button
        name="Completed"
        onClick={() => dispatch(changeFilter("completed"))}
      />
      <Button name="Active" onClick={() => dispatch(changeFilter("alctive"))} />
    </div>
  );
}
