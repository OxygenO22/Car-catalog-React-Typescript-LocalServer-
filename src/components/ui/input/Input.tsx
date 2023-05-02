import { FC } from "react";
import styles from "./Input.module.scss";

interface IInput {
  placeholder?: string;
  onChange?: any;
  value?: string;
  type?: string;
  checked?: any;
}

export const Input: FC<IInput> = (props) => {
  return (
    <input
      className={styles.input}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
      type={props.type}
      checked={props.checked}
    />
  );
};
