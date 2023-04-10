import React, { FC } from 'react';
import styles from "./Button.module.scss";


export const Button = (props) => {
  return (
    <button className={styles.button}>{props.name}</button>
  )
}
