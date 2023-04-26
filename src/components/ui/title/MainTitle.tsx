import React, { FC } from "react";
import styles from "./MainTitle.module.scss";

interface IMainTitle {
  name: string;
}

export const MainTitle: FC<IMainTitle> = (props) => {
  return (
    <h1 className={styles.title}>{props.name}</h1>
  );
};
