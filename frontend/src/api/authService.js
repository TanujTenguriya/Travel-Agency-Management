// import API from "./axiosConfig";

// export const loginUser = async (email, password, username, role) => {
//   try {
//     const response = await API.post("/users/login", {  username,email, password,role });
//     return response.data;
//   } catch (error) {
//     console.error("Login failed:", error.response?.data || error.message);
//     throw error;
//   }
// };
import API from "./axiosConfig";

// Login User
export const loginUser = async (email, password) => {
  try {
    const response = await API.post("/users/login", { email, password });
    localStorage.setItem("email", email);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};

// Register User
// export const registerUser = async (username, email, password, role = "user") => {
//   try {
//     const response = await API.post("/users/register", {
//       username,
//       email,
//       password,
//       role,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Registration failed:", error.response?.data || error.message);
//     throw error;
//   }
// };
export const registerUser = async (username, email, password, role) => {
  try {
    const response = await API.post("/users/register", {
      username,
      email,
      password,
      role,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

