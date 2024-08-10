import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const location = useLocation();
  const page = location.pathname;
  return (
    <div>
      <h2>Stopka</h2>
      <Routes>
        <Route
          path="/"
          element={
            <p>
              Jesteś na <span>stronie głównej</span>
            </p>
          }
        />
        <Route
          path="/:page"
          element={
            <p>
              Jesteś na <span>{page}</span>
            </p>
          }
        />
        <Route
          path="/:page/:idProduct"
          element={
            <p>
              Jesteś na <span>{page}</span>
            </p>
          }
        />
      </Routes>
    </div>
  );
};

export default Footer;
