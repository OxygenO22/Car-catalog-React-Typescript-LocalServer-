import { RouteButton } from "../../ui/buttons/RouteButton";
import { Header } from "../../ui/header/Header";
import { MainTitle } from "../../ui/title/MainTitle";


export const Authorization = () => {
  return (
    <div>
      <Header place="authorizationPage" />
      <RouteButton path="/Authorization/AuthHomePage" name="Auth Home Page" />
    </div>
  );
}
