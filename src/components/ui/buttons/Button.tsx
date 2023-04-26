import { FC } from "react";
import styles from "./Button.module.scss";

interface IButton {
  name: string;
  onClick?: any;
}


export const Button: FC<IButton> = (props) => {
  return (
    <button onClick={props.onClick} className={styles.button}>{props.name}</button>
  );
};
