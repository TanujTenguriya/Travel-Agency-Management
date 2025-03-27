import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

// import userRoutes from "./routes/user.routes.js";
// import flightRoutes from "./routes/flight.routes.js";
// import busRoutes from "./routes/bus.routes.js";
// import trainRoutes from "./routes/train.routes.js";
// import hotelRoutes from "./routes/hotel.routes.js";
// import packageRoutes from "./routes/package.routes.js";
// import bookingRoutes from "./routes/booking.routes.js";
import routes from "./routes/index.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/users", userRoutes);
// app.use("/api/flights", flightRoutes);
// app.use("/api/buses", busRoutes);
// app.use("/api/trains", trainRoutes);
// app.use("/api/hotels", hotelRoutes);
// app.use("/api/packages", packageRoutes);
// app.use("/api/bookings", bookingRoutes);
app.use("/api", routes);


export default app;



