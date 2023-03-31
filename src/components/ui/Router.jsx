import React from 'react'
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { LongPulling } from '../chat/LongPulling';
import { EventSourcing } from '../chat/EventSourcing';
import { CarDetail } from '../screens/car-detail/CarDetail';
import { Home } from "../screens/home/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/" />
        <Route element={<CarDetail/>} path="/car/:id" />
        <Route element={<LongPulling/>} path="/chatLP" />
        <Route element={<EventSourcing /> } path="/chatES" />
        <Route element={<div>Not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  )
}
