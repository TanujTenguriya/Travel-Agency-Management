import Booking from "../models/booking.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

// Get all bookings
export const getBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find().populate("user").populate("package");
    res.json(new ApiResponse(200, bookings));
});

// Get single booking
export const getBooking = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id).populate("user").populate("package");
    if (!booking) throw new ApiError(404, "Booking not found");
    res.json(new ApiResponse(200, booking));
});

// Create booking
export const createBooking = asyncHandler(async (req, res) => {
    const booking = new Booking(req.body);
    await booking.save();
    res.json(new ApiResponse(201, booking, "Booking added successfully"));
});

// Update booking
export const updateBooking = asyncHandler(async (req, res) => {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) throw new ApiError(404, "Booking not found");
    res.json(new ApiResponse(200, booking, "Booking updated successfully"));
});

// Delete booking
export const deleteBooking = asyncHandler(async (req, res) => {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) throw new ApiError(404, "Booking not found");
    res.json(new ApiResponse(200, null, "Booking deleted successfully"));
});
