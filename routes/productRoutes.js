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

router.get("/products", getAllProducts);

router.get("/products/:id", getProductById);

router.get("/categoryproducts/:category", getProductsByCategory);

router.post("/products", upload.array("imagePath", 5), createProduct);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id", upload.array("imagePath", 5), updateProduct);

export default router;
