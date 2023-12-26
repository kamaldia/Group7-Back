import express from "express";
import Verification from '../middlewares/jwt.js';
import {
  createAdvertisement,
  getAllAdvertisements,
  getAdvertisementById,
  updateAdvertisement,
  deleteAdvertisement,
} from "../controllers/advertisementController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.post("/", Verification.verifyLogin, upload.single("image"), createAdvertisement);

router.get("/", Verification.verifyLogin, getAllAdvertisements);

router.get("/:id", Verification.verifyLogin, getAdvertisementById);

router.put("/:id", Verification.verifyLogin, upload.single("image"), updateAdvertisement);

router.delete("/:id", Verification.verifyLogin, deleteAdvertisement);

export default router;
