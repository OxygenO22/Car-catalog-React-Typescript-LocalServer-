import { RouteButton } from "../buttons/RouteButton";

export const HomeMenu = () => {
  return (
    <>
      <RouteButton path="/chatLP" name="ChatLP" />
      <RouteButton path="/chatES" name="ChatES" />
      <RouteButton path="/Redux" name="Redux" />
      <RouteButton path="/ReduxToolkit" name="Redux Toolkit" />
      <RouteButton path="/TaskManager" name="Task Manager" />
    </>
  );
};
