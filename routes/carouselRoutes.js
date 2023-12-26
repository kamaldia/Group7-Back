import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import Verification from '../middlewares/jwt.js';
import {
  createCarousel,
  getAllCarousels,
  getCarouselById,
  updateCarousel,
  deleteCarousel,
} from "../controllers/carouselController.js";

const router = express.Router();

router.post("/", Verification.verifyLogin, upload.single("image"), createCarousel);

router.get("/", Verification.verifyLogin, getAllCarousels);

router.get("/:id", Verification.verifyLogin, getCarouselById);

router.put("/:id", Verification.verifyLogin, upload.single("image"), updateCarousel);

router.delete("/:id", Verification.verifyLogin, deleteCarousel);

export default router;
