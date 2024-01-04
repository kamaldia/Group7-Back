import express from "express";
import {
  createAdvertisement,
  getAllAdvertisements,
  getAdvertisementById,
  updateAdvertisement,
  deleteAdvertisement,
} from "../controllers/advertisementController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/", upload.single("image"), createAdvertisement);

router.get("/", getAllAdvertisements);

router.get("/:id", getAdvertisementById);

router.put("/:id", upload.single("image"), updateAdvertisement);

router.delete("/:id", deleteAdvertisement);

export default router;
