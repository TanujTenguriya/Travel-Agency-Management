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
import Flights from "../pages/Flights";
import Train from "../pages/Train";
import Bus from "../pages/Bus";
import Hotel from "../pages/Hotel";
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
      <Route path="/flights" element={<Flights/>} />
      <Route path="/trains" element={<Train/>} />
      <Route path="/buses" element={<Bus/>} />
      <Route path="/hotels" element={<Hotel/>} />
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
