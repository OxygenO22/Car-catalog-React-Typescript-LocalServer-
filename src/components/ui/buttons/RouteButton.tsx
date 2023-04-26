import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./RouteButton.module.scss";

interface IRouteButton {
  path: string;
  name: string;
}

export const RouteButton: FC<IRouteButton> = (props) => {
  return (
    <Link className={styles.button} to={props.path}>{props.name}</Link>
  );
};
