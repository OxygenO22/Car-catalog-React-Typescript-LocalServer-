import React, { FC } from "react";
import styles from "./RouteButton.module.scss";
import { Link } from "react-router-dom";

interface IRouteButton {
  path: string;
  name: string;
}

export const RouteButton: FC<IRouteButton> = (props) => {
  return (
    <Link className={styles.button} to={props.path}>{props.name}</Link>
  );
};
