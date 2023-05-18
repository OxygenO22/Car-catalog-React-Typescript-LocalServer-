import { AuthForm } from "./AuthForm";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../store/authorization/authSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch } from "../../hooks/useTypedSelector";

export const AuthLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/Authorization/AuthHomePage");
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <AuthForm 
      title="sign in"
      handleClick={handleLogin}
    />
  )
}
