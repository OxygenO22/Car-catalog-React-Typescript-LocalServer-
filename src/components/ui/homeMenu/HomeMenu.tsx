import { RouteButton } from "../buttons/RouteButton";

export const HomeMenu = () => {
  return (
    <>
      <RouteButton path="/chatLP" name="ChatLP" />
      <RouteButton path="/chatES" name="ChatES" />
      <RouteButton path="/ReduxBank" name="Redux Bank" />
      <RouteButton path="/ReduxToolkit" name="Redux Toolkit" />
      <RouteButton path="/TaskManager" name="Task Manager" />
      <RouteButton path="/CarsCatalog" name="Cars Catalog" />
      <RouteButton path="/ToDo" name="To Do" />
    </>
  );
};
