import express from "express";
import Verification from '../middlewares/jwt.js';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/userController.js";

const router = express.Router();

//login user
router.post("/login", Verification.verifyLogin, loginUser);

//Create
router.post("/", Verification.verifyLogin, createUser);

// Get all
router.get("/", Verification.verifyLogin, getAllUsers);

// Get single
router.get("/:id", Verification.verifyLogin, getUserById);

// Update
router.put("/:id", Verification.verifyLogin, updateUser);

// Delete
router.delete("/:id", Verification.verifyLogin, deleteUser);

export default router;
