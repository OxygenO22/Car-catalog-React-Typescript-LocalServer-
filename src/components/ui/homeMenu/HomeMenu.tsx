import { RouteButton } from "../buttons/RouteButton";

export const HomeMenu = () => {
  return (
    <>
      <RouteButton path="/chatLP" name="ChatLP" />
      <RouteButton path="/chatES" name="ChatES" />
      <RouteButton path="/Bank" name="Bank" />
      <RouteButton path="/ClothersShop" name="Clothers Shop" />
      <RouteButton path="/TaskManager" name="Task Manager" />
      <RouteButton path="/CarsCatalog" name="Cars Catalog" />
      <RouteButton path="/ToDo" name="To Do" />
    </>
  );
};
