import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import {
  createCarousel,
  getAllCarousels,
  getCarouselById,
  updateCarousel,
  deleteCarousel,
} from "../controllers/carouselController.js";

const router = express.Router();

router.post("/", upload.single("image"), createCarousel);

router.get("/", getAllCarousels);

router.get("/:id", getCarouselById);

router.put("/:id", upload.single("image"), updateCarousel);

router.delete("/:id", deleteCarousel);

export default router;
