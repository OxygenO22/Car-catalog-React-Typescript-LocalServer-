import { FC } from "react";
import { MainTitle } from "../title/MainTitle";
import { RouteButton } from "../buttons/RouteButton";
import styles from "./Header.module.scss";
import { data } from "./HeaderData";
import { IData } from "./HeaderType";

interface IHeader {
  place: string;
}

export const Header: FC<IHeader> = ({place}) => {
  return (
    <>
      {data.map((item: IData) => (
        place === item.place &&
        <div className={styles.header__wrapper} key={item.place}>
          <MainTitle name={item.mainTitleName} />
          <RouteButton
            path={item.routeButtonPath}
            name={item.routeButtonName}
          />
        </div>
      ))}
    </>
  );
};
