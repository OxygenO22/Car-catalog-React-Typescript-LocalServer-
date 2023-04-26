import { MainTitle } from "../../ui/title/MainTitle";
import { RouteButton } from "../../ui/buttons/RouteButton";
import styles from "./TaskManager.module.scss";

export const TaskManager = () => {
  return (
    <div className={styles.taskManager__wrapper}>
      <MainTitle name="Task Manager" />
      <RouteButton path="/" name="Back" />
    </div>
  );
};
