import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Get all users
export const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.json(new ApiResponse(200, users));
});

// Get single user
export const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) throw new ApiError(404, "User not found");
    res.json(new ApiResponse(200, user));
});

// Create user (Register)
export const createUser = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    // Check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new ApiError(400, "Email already in use");

    const user = new User({ username, email, password, role });
    await user.save();

    res.json(new ApiResponse(201, user, "User registered successfully"));
});

// Update user
export const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) throw new ApiError(404, "User not found");
    res.json(new ApiResponse(200, user, "User updated successfully"));
});

// Delete user
export const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) throw new ApiError(404, "User not found");
    res.json(new ApiResponse(200, null, "User deleted successfully"));
});

// Login user
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) throw new ApiError(401, "Invalid email or password");

    // Verify password (Plain text comparison; Hashing is recommended)
    if (user.password !== password) throw new ApiError(401, "Invalid email or password");

    // Generate JWT Token
    const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "1h" }
    );

    res.json(new ApiResponse(200, { token, role: user.role,username: user.username }, "Login successful"));
});
