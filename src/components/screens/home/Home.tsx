import { HomeMenu } from "../../ui/homeMenu/HomeMenu";
import { Smile } from "../../ui/mainPage/Smile";
import { MainTitle } from "../../ui/title/MainTitle";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.prime__wrapper}>
      <MainTitle name="Main Page" />
      <div className={styles.buttons__wrapper}>
        <HomeMenu />
      </div>
        <Smile />
    </div>
  );
};
