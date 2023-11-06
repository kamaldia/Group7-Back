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

router.post("/carousels", upload.single("image"), createCarousel);

router.get("/carousels", getAllCarousels);

router.get("/carousels/:id", getCarouselById);

router.put("/carousels/:id", upload.single("image"), updateCarousel);

router.delete("/carousels/:id", deleteCarousel);

export default router;
