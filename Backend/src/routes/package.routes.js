// import express from "express";
// import {
//     getPackages,
//     getPackage,
//     createPackage,
//     updatePackage,
//     deletePackage
// } from "../controllers/package.controller.js";

// const router = express.Router();

// router.route("/")
//     .get(getPackages)        // Get all packages
//     .post(createPackage);     // Create new package

// router.route("/:id")
//     .get(getPackage)          // Get package by ID
//     .put(updatePackage)       // Update package
//     .delete(deletePackage);   // Delete package
// router.route("/admin/manage-packages")
//     .get(getPackages)
//     .post(createPackage)
//     .put(updatePackage)       // Update package
//     .delete(deletePackage);


// export default router;
import express from "express";
import {
    getPackages,
    getPackage,
    createPackage,
    updatePackage,
    deletePackage
} from "../controllers/package.controller.js";
import { verifyAdmin } from "../middlewares/auth.middleware.js";  // Import admin verification

const router = express.Router();

// Public Routes (Accessible to all)
router.get("/", getPackages);
router.get("/:id", getPackage);

// Admin Routes (Restricted to admin users)
router.post("/", verifyAdmin, createPackage);
router.put("/:id", verifyAdmin, updatePackage);
router.delete("/:id", verifyAdmin, deletePackage);

export default router;
