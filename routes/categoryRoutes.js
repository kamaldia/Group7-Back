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

router.get("/", getAllCategories);

router.get("/:id", getCategoryById);

router.post("/", upload.single("categoryImage"), createCategory);

router.put("/:id", upload.single("categoryImage"), updateCategory);

router.delete("/:id", deleteCategory);

export default router;
