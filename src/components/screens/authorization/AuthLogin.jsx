import { AuthForm } from "./AuthForm";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/authorization/authSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthLogin = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.accessToken
      }));
      push("/Authorization/AuthHomePage");
    })
      .catch(console.error)
  }

  return (
    <AuthForm 
      title="sign in"
      handleClick={handleLogin}
    />
  )
}
