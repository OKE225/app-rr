import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const permission = true;

const AdminPage = () => {
  return (
    <Routes>
      <Route
        element={() =>
          permission ? (
            <h3>Panel admina - dzień dobry</h3>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default AdminPage;
