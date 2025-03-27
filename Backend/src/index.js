import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// import cors from "cors";
// import express from "express";
// import dotenv from "dotenv";

// dotenv.config(); // Load environment variables

// const app = express();

// // ✅ Allow frontend requests (Replace with your frontend URL)
// app.use(cors({
//     origin: "*", // Change this in production to your frontend URL (e.g., "http://localhost:3000")
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"]
// }));

// // ✅ Middleware
// app.use(express.json()); // Parse JSON requests

// // ✅ Your Routes
// import userRoutes from "./routes/user.routes.js";
// app.use("/api/users", userRoutes);

// // ✅ Start the server
// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });




