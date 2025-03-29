import React from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  // Retrieve admin details from localStorage
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* Admin Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold">Admin Details</h2>
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Role:</strong> {role}</p>
      </div>

      {/* Navigation Links */}
      {/* <div className="flex space-x-4">
        <Link to="/packages" className="bg-blue-600 text-white px-4 py-2 rounded">Manage Packages</Link>
        <Link to="/booking" className="bg-green-600 text-white px-4 py-2 rounded">Manage Bookings</Link>
      </div> */}
      <div className="flex space-x-4">
  <Link to="/admin/manage-packages" className="bg-blue-600 text-white px-4 py-2 rounded">
    Manage Packages
  </Link>
  <Link to="/admin/manage-flights" className="bg-green-600 text-white px-4 py-2 rounded">
    Manage Flights
  </Link>
  <Link to="/admin/manage-trains" className="bg-green-600 text-white px-4 py-2 rounded">
    Manage Trains
  </Link>
  <Link to="/admin/manage-buses" className="bg-green-600 text-white px-4 py-2 rounded">
    Manage Bus
  </Link>
  <Link to="/admin/manage-hotels" className="bg-green-600 text-white px-4 py-2 rounded">
    Manage Hotels
  </Link>
</div>


      {/* Logout Button */}
      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;

