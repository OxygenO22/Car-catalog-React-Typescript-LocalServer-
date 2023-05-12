import { RouteButton } from "../buttons/RouteButton";

export const HomeMenu = () => {
  return (
    <>
      <RouteButton path="/chatLP" name="ChatLP" />
      <RouteButton path="/chatES" name="ChatES" />
      <RouteButton path="/Bank" name="Bank" />
      <RouteButton path="/ClothersShop" name="Clothers Shop" />
      <RouteButton path="/GoodsList" name="List of Goods" />
      <RouteButton path="/CarsCatalog" name="Cars Catalog" />
      <RouteButton path="/ToDo" name="To Do" />
      <RouteButton path="/Tests" name="Tests" />
      <RouteButton path="/Authorization" name="Authorization" />
    </>
  );
};
