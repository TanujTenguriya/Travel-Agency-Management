import express from "express";
import { getFlights, getFlight, createFlight, updateFlight, deleteFlight } from "../controllers/flight.controller.js";

const router = express.Router();

router.get("/", getFlights);
router.get("/:id", getFlight);
router.post("/", createFlight);
router.put("/:id", updateFlight);
router.delete("/:id", deleteFlight);

export default router;
