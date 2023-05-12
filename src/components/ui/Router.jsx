import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CarDetail } from "../screens/car-detail/CarDetail";
import { ClothersShop } from "../screens/clothersShop/ClothersShop";
import { EventSourcing } from "../chat/EventSourcing";
import { Home } from "../screens/home/Home";
import { LongPulling } from "../chat/LongPulling";
import { MainTitle } from "./title/MainTitle";
import { ReduxBank } from "../screens/bank/ReduxBank";
import { GoodsList } from "../screens/goodsList/GoodsList";
import { Cars } from "../screens/cars/Cars";
import { ToDo } from "../screens/toDo/ToDo";
import { Tests } from "../screens/tests/Tests";
import { Authorization } from "../screens/authorization/Authorization";
import { AuthHomePage } from "../screens/authorization/AuthHomePage";
import { AuthLoginPage } from "../screens/authorization/AuthLoginPage";
import { AuthRegisterPage } from "../screens/authorization/AuthRegisterPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<Cars/>} path="/CarsCatalog" />
        <Route element={<CarDetail/>} path="/car/:id" />
        <Route element={<LongPulling/>} path="/chatLP" />
        <Route element={<EventSourcing /> } path="/chatES" />
        <Route element={<ReduxBank /> } path="/Bank" />
        <Route element={<ClothersShop /> } path="/ClothersShop" />
        <Route element={<GoodsList /> } path="/GoodsList" />
        <Route element={<ToDo /> } path="/ToDo" />
        <Route element={<Tests /> } path="/Tests" />
        <Route element={<Authorization /> } path="/Authorization" />
        <Route element={<AuthHomePage /> } path="/Authorization/AuthHomePage" />
        <Route element={<AuthLoginPage /> } path="/Authorization/AuthLoginPage" />
        <Route element={<AuthRegisterPage /> } path="/Authorization/AuthRegisterPage" />
        <Route element={<MainTitle name="Not found" />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
