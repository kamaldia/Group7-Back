import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import Verification from '../middlewares/jwt.js';
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", Verification.verifyLogin, getAllCategories);

router.get("/:id", Verification.verifyLogin, getCategoryById);

router.post("/", Verification.verifyLogin, upload.single("categoryImage"), createCategory);

router.put("/:id", Verification.verifyLogin, upload.single("categoryImage"), updateCategory);

router.delete("/:id", Verification.verifyLogin, deleteCategory);

export default router;
