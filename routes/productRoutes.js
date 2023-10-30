import express from "express";
import upload from "../middlewares/uploadMiddleware.js";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getAllProducts);

router.get("/products", getAllProducts);

router.get("/categoryproducts/:category", getProductsByCategory);

router.post("/products", upload.single("imagePath"),createProduct);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id", upload.single("imagePath"), updateProduct);

export default router;
