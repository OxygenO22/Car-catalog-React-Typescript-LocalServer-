import React from "react";
import styles from "./TaskManager.module.scss";
import { MainTitle } from "../../ui/title/MainTitle";
import { RouteButton } from "../../ui/buttons/RouteButton";

export const TaskManager = () => {
  return (
    <div className={styles.taskManager__wrapper}>
      <MainTitle name="Task Manager" />
      <RouteButton path="/" name="Back" />
    </div>
  );
}
