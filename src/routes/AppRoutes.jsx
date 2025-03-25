import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Packages from "../pages/Packages";
import Booking from "../pages/Booking";
import NotFound from "../pages/NotFound";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";
import ProtectedRoute from "../components/ProtectedRoute";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
        <Route path="/booking" element={<Booking />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Route>
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
