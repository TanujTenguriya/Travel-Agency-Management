import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  // State to store user details
  const [user, setUser] = useState({
    username: "",
    email: "",
    role: "",
  });

  // Fetch user details from localStorage
  useEffect(() => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("userRole");

    if (!username || !email || !role || role !== "user") {
      navigate("/login"); // Redirect if no user data found
    } else {
      setUser({ username, email, role });
    }
  }, [navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">User Dashboard</h1>

      {/* User Details */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold">User Details</h2>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>

      {/* Logout Button */}
      <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default UserDashboard;
