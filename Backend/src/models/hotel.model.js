import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    hotelName: { type: String, required: true },
    location: { type: String, required: true },
    address: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    rating: { type: Number, required: true },
    availableRooms: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model("Hotel", HotelSchema);
