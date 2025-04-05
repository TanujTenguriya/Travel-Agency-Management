// import React from "react";
// import { useNavigate, Link } from "react-router-dom";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
  
//   // Retrieve admin details from localStorage
//   const username = localStorage.getItem("username");
//   const email = localStorage.getItem("email");
//   const role = localStorage.getItem("userRole");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userRole");
//     localStorage.removeItem("username");
//     localStorage.removeItem("email");
//     navigate("/");
//   };

//   return (
//     <div className="h-screen flex flex-col items-center justify-center space-y-6">
//       <h1 className="text-3xl font-bold">Admin Dashboard</h1>

//       {/* Admin Details */}
//       <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
//         <h2 className="text-xl font-semibold">Admin Details</h2>
//         <p><strong>Username:</strong> {username}</p>
//         <p><strong>Email:</strong> {email}</p>
//         <p><strong>Role:</strong> {role}</p>
//       </div>

//       {/* Navigation Links */}
//       {/* <div className="flex space-x-4">
//         <Link to="/packages" className="bg-blue-600 text-white px-4 py-2 rounded">Manage Packages</Link>
//         <Link to="/booking" className="bg-green-600 text-white px-4 py-2 rounded">Manage Bookings</Link>
//       </div> */}
//       <div className="flex space-x-4">
//   <Link to="/admin/manage-packages" className="bg-blue-600 text-white px-4 py-2 rounded">
//     Manage Packages
//   </Link>
//   <Link to="/admin/manage-flights" className="bg-green-600 text-white px-4 py-2 rounded">
//     Manage Flights
//   </Link>
//   <Link to="/admin/manage-trains" className="bg-green-600 text-white px-4 py-2 rounded">
//     Manage Trains
//   </Link>
//   <Link to="/admin/manage-buses" className="bg-green-600 text-white px-4 py-2 rounded">
//     Manage Bus
//   </Link>
//   <Link to="/admin/manage-hotels" className="bg-green-600 text-white px-4 py-2 rounded">
//     Manage Hotels
//   </Link>
// </div>


//       {/* Logout Button */}
//       <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">
//         Logout
//       </button>
//     </div>
//   );
// };

// export default AdminDashboard;

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSignOutAlt, FaUserShield, FaSuitcase, FaPlane, FaTrain, FaBus, FaHotel,FaCar} from "react-icons/fa";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 to-indigo-500 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-white mb-6 flex items-center gap-2">
        <FaUserShield className="text-yellow-300" /> Admin Dashboard
      </h1>

      {/* Admin Info */}
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome, Admin</h2>
        <p className="text-gray-600"><strong>Username:</strong> {username}</p>
        <p className="text-gray-600"><strong>Email:</strong> {email}</p>
        <p className="text-gray-600"><strong>Role:</strong> {role}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
        <LinkCard to="/admin/manage-packages" label="Packages" icon={<FaSuitcase />} color="black" />
        <LinkCard to="/admin/manage-flights" label="Flights" icon={<FaPlane />} color="black" />
        <LinkCard to="/admin/manage-trains" label="Trains" icon={<FaTrain />} color="purple" />
        <LinkCard to="/admin/manage-buses" label="Buses" icon={<FaBus />} color="orange" />
        <LinkCard to="/admin/manage-hotels" label="Hotels" icon={<FaHotel />} color="teal" />
        <LinkCard to="/admin/manage-buses" label="cabs" icon={<FaCar />} color="black" />
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded shadow-md transition duration-300"
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

// Reusable LinkCard Component
const LinkCard = ({ to, label, icon, color }) => {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center bg-white border-t-4 border-${color}-500 hover:shadow-xl rounded-lg p-4 text-center transition duration-300`}
    >
      <div className={`text-${color}-500 text-3xl mb-2`}>
        {icon}
      </div>
      <span className="font-semibold text-gray-700">{label}</span>
    </Link>
  );
};

export default AdminDashboard;
