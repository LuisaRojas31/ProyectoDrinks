import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detalles from "../pages/Detalles";
import Especificaciones from "../pages/Especificaciones";
import Home from "../pages/Home";

const RouterContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalles" element={<Detalles />} />
        <Route path="/espec" element={<Especificaciones />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterContainer;
