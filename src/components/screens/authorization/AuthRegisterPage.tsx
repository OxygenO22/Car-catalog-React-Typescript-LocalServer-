import { Header } from "../../ui/header/Header";
import { RouteButton } from "../../ui/buttons/RouteButton";
import styles from "./Authorization.module.scss";
import { AuthSignUp } from "./AuthSignUp";

export const AuthRegisterPage = () => {
  return (
    <div>
      <Header place="registerPage" />
      <AuthSignUp />
      <div className={styles.auth__wrapper}>
        <p className={styles.auth__text}>Already have an account? </p>
        <RouteButton path="/Authorization/AuthLoginPage" name="Sign in" />
      </div>
    </div>
  );
};
