import express from "express";
import upload from "../middlewares/uploadMiddleware.js";

import {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/categories", getAllCategories);

router.get("/categories/:id", getCategoryById);

router.post("/categories", upload.single("categoryImage"), createCategory);

router.put("/categories/:id", upload.single("categoryImage"), updateCategory);

router.delete("/categories/:id", deleteCategory);

export default router;
