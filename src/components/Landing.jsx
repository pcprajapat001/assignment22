import React from "react";
import { Card, CardContent } from "@mui/material";
import { Categories } from "./Categories";
import { Product } from "./Product";
import { About } from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./Contact";
import { Home } from "./Home";

import { NavList } from "./NavList";

export const Landing = () => {
  return (
    <BrowserRouter>
      <NavList />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/cnct" element={<Contact />} />
        <Route path="/cat" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
};
