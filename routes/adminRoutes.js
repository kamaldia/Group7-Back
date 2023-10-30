import express from "express";
import {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  loginAdmin,
} from "../controllers/adminController.js";

const router = express.Router();

//login admin
router.post("/admin", loginAdmin);

//Create
router.post("/admins", createAdmin);

// Get all
router.get("/admins", getAllAdmins);

// Get single
router.get("/admins/:id", getAdminById);

// Update
router.put("/admins/:id", updateAdmin);

// Delete
router.delete("/admins/:id", deleteAdmin);

export default router;
