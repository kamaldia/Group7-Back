import express from "express";
import {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
} from "../controllers/adminController.js";

const router = express.Router();

//Create
router.post("/", createAdmin);

// Get all
router.get("/", getAllAdmins);

// Get single
router.get("/:id", getAdminById);

// Update
router.put("/:id", updateAdmin);

// Delete
router.delete("/:id", deleteAdmin);

export default router;
