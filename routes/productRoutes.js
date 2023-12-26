import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import Verification from '../middlewares/jwt.js';

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", Verification.verifyLogin, getAllProducts);

router.get("/:id", Verification.verifyLogin, getProductById);

router.get("/category/:category", Verification.verifyLogin, getProductsByCategory);

router.post("/", Verification.verifyLogin, upload.array("imagePath", 5), createProduct);

router.delete("/:id", Verification.verifyLogin, deleteProduct);

router.put("/:id", Verification.verifyLogin, upload.array("imagePath", 5), updateProduct);

export default router;
