import { useTypedSelector } from "./useTypedSelector";

export function useAuth() {
  const { email, token, id } = useTypedSelector(state => state.user);
  return {
    isAuth: !!email,
    email,
    token,
    id
  }
}
