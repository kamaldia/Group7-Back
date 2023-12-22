import express from "express";
import upload from "../middlewares/uploadMiddleware.js";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.get("/category/:category", getProductsByCategory);

router.post("/", upload.array("imagePath", 5), createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", upload.array("imagePath", 5), updateProduct);

export default router;
