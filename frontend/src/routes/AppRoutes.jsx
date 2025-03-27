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
import ManagePackages from "../pages/ManagePackages";
// import ManageBookings from "../pages/ManageBookings"
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
        <Route path="/admin/manage-packages" element={<ManagePackages />} />
        {/* <Route path="/admin/manage-bookings" element={<ManageBookings />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
