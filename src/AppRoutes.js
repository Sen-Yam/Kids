import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jouets from "./pages/Jouets";
import Error from "./pages/Error";
import Promos from "./pages/Promos";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jouets" element={<Jouets />} />
      <Route path="/promos" element={<Promos />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
