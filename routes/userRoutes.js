import express from "express";
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
router.post("/login", loginUser);

//Create
router.post("/", createUser);

// Get all
router.get("/", getAllUsers);

// Get single
router.get("/:id", getUserById);

// Update
router.put("/:id", updateUser);

// Delete
router.delete("/:id", deleteUser);

export default router;
