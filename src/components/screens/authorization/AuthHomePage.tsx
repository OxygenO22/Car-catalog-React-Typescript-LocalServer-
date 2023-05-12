import { Header } from "../../ui/header/Header";
import { Navigate } from "react-router-dom";

export const AuthHomePage = () => {
  return (
    <div>
      <Header place="authHomePage" />
      <Navigate to="/Authorization/AuthLoginPage" />
    </div>
  );
};
