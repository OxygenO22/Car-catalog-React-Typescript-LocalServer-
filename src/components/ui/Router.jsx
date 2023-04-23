import React from 'react'
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { LongPulling } from '../chat/LongPulling';
import { EventSourcing } from '../chat/EventSourcing';
import { CarDetail } from '../screens/car-detail/CarDetail';
import { Home } from "../screens/home/Home";
import { ReduxBank } from '../screens/bank/ReduxBank';
import { ClothersShop } from '../screens/clothersShop/ClothersShop';
import { MainTitle } from './title/MainTitle';
import { TaskManager } from '../screens/taskManager/TaskManager';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<CarDetail/>} path="/car/:id" />
        <Route element={<LongPulling/>} path="/chatLP" />
        <Route element={<EventSourcing /> } path="/chatES" />
        <Route element={<ReduxBank /> } path="/Redux" />
        <Route element={<ClothersShop /> } path="/ReduxToolkit" />
        <Route element={<TaskManager /> } path="/TaskManager" />
        <Route element={<MainTitle name="Not found" />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}
