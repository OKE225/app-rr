import React from "react";
import { Routes, Route } from "react-router-dom";

import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";
import imgError from "../images/error.jpg";

import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<img src={img1} alt="miasto" />} />
        <Route path="/products" element={<img src={img2} alt="miasto" />} />
        <Route path="/product/:id" element={<img src={img2} alt="miasto" />} />
        <Route path="/contact" element={<img src={img3} alt="miasto" />} />
        <Route path="/admin/*" element={<img src={img3} alt="miasto" />} />
        <Route path="*" element={<img src={imgError} alt="error" />} />
      </Routes>
    </>
  );
};

export default Header;
