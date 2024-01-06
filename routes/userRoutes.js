import express from "express";
import Verification from '../middlewares/jwt.js';
import {
  createUser,
  getAllUsers,
  getAdminById,
  updateUser,
  deleteAdmin,
} from "../controllers/adminController.js";

const router = express.Router();

//Create
router.post("/", Verification.verifyLogin, createUser);

// Get all
router.get("/", Verification.verifyLogin, Verification.verifyAdmin, getAllUsers);

// Get single
router.get("/:id", Verification.verifyLogin, getAdminById);

// Update
router.put("/:id", Verification.verifyLogin, updateUser);

// Delete
router.delete("/:id", Verification.verifyLogin, Verification.verifyAdmin, deleteAdmin);

export default router;
