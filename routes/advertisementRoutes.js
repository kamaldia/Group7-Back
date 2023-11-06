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

router.post("/advertisements", upload.single("image"), createAdvertisement);

router.get("/advertisements", getAllAdvertisements);

router.get("/advertisements/:id", getAdvertisementById);

router.put("/advertisements/:id", upload.single("image"), updateAdvertisement);

router.delete("/advertisements/:id", deleteAdvertisement);

export default router;
