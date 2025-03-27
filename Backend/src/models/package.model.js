import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema({
    packageName: { type: String, required: true },
    place: { type: String, required: true },
    duration: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String }
}, { timestamps: true });

export default mongoose.model("Package", PackageSchema);
