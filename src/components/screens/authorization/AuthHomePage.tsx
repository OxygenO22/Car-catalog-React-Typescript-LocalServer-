import { Header } from "../../ui/header/Header";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../../store/authorization/authSlice";
import { useDispatch } from "react-redux";
import { Button } from "../../ui/buttons/Button";

export const AuthHomePage = () => {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();

  return isAuth ? (
    <div>
      <Header place="authHomePage" />

      <Button name={`Log out from ${email}`} onClick={() => dispatch(removeUser())}  />
    </div>
  ) : (
    <Navigate to="/Authorization/AuthLoginPage" />
  );
};
