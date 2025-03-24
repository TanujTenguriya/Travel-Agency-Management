import React, { useState } from "react";
import { loginUser } from "../api/authService"; // API call function
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const { token, user } = await loginUser(email, password);
      localStorage.setItem("token", token); // Save JWT token
      localStorage.setItem("userRole", user.role); // Save user role

      navigate(user.role === "admin" ? "/admin-dashboard" : "/user-dashboard"); // Redirect based on role
    } catch (error) {
      setError("Login failed! Invalid credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-6 bg-white shadow-md rounded w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;


