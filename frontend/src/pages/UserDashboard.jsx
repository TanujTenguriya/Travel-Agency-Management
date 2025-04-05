// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UserDashboard = () => {
//   const navigate = useNavigate();

//   // State to store user details
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     role: "",
//   });

//   // Fetch user details from localStorage
//   useEffect(() => {
//     const username = localStorage.getItem("username");
//     const email = localStorage.getItem("email");
//     const role = localStorage.getItem("userRole");

//     if (!username || !email || !role || role !== "user") {
//       navigate("/login"); // Redirect if no user data found
//     } else {
//       setUser({ username, email, role });
//     }
//   }, [navigate]);

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userRole");
//     localStorage.removeItem("username");
//     localStorage.removeItem("email");
//     navigate("/");
//   };

//   return (
//     <div className="h-screen flex flex-col items-center justify-center space-y-6">
//       <h1 className="text-3xl font-bold">User Dashboard</h1>

//       {/* User Details */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
//         <h2 className="text-xl font-semibold">User Details</h2>
//         <p><strong>Username:</strong> {user.username}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Role:</strong> {user.role}</p>
//       </div>

//       {/* Logout Button */}
//       <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">
//         Logout
//       </button>
//     </div>
//   );
// };

// export default UserDashboard;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

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
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      {/* User Profile Card */}
      <motion.div 
        className="glassmorphism w-full max-w-md p-6 rounded-lg shadow-xl text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <FaUserCircle className="text-6xl text-white mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white">Welcome, {user.username}!</h1>

        <div className="mt-4 text-white space-y-2">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      </motion.div>

      {/* Logout Button */}
      <motion.button
        className="mt-6 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        onClick={handleLogout}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiLogOut className="text-lg" />
        Logout
      </motion.button>
    </div>
  );
};

export default UserDashboard;
