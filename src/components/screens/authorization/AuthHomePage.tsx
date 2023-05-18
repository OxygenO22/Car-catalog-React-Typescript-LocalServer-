import { Header } from "../../ui/header/Header";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../../store/authorization/authSlice";
import { Button } from "../../ui/buttons/Button";
import { useAppDispatch } from "../../hooks/useTypedSelector";

export const AuthHomePage = () => {
  const dispatch = useAppDispatch();
  const {isAuth, email} = useAuth();

  return isAuth ? (
    <div>
      <Header place="authHomePage" />
      <h1>Welcome!</h1>

      <Button name={`Log out from ${email}`} onClick={() => dispatch(removeUser())}  />
    </div>
  ) : (
    <Navigate to="/Authorization/AuthLoginPage" />
  );
};
