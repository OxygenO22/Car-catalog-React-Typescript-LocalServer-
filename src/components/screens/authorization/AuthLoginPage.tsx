import { Header } from "../../ui/header/Header";
import { RouteButton } from "../../ui/buttons/RouteButton";
import styles from "./Authorization.module.scss";
import { AuthLogin } from "./AuthLogin";

export const AuthLoginPage = () => {
  return (
    <div>
      <Header place="loginPage" />
      <AuthLogin />
      <div className={styles.auth__wrapper}>
        <p className={styles.auth__text}>Or</p>
        <RouteButton path="/Authorization/AuthRegisterPage" name="Register" />
      </div>
    </div>
  );
};
