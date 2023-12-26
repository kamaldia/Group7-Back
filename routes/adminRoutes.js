import express from "express";
import Verification from '../middlewares/jwt.js';
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
router.post("/login", Verification.verifyLogin, Verification.verifyAdmin, loginAdmin);

//Create
router.post("/", Verification.verifyLogin, Verification.verifyAdmin, createAdmin);

// Get all
router.get("/", Verification.verifyLogin, Verification.verifyAdmin, getAllAdmins);

// Get single
router.get("/:id", Verification.verifyLogin, Verification.verifyAdmin, getAdminById);

// Update
router.put("/:id", Verification.verifyLogin, Verification.verifyAdmin, updateAdmin);

// Delete
router.delete("/:id", Verification.verifyLogin, Verification.verifyAdmin, deleteAdmin);

export default router;
