import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import Verification from '../middlewares/jwt.js';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

// router object
const router = express.Router();

//get single blog
router.get("/:id", Verification.verifyLogin, getBlogById);

// get all blogs
router.get("/", Verification.verifyLogin, getAllBlogs);

// post a new blog
router.post("/", Verification.verifyLogin, upload.single("image"), createBlog);

//update a blog
router.patch("/:id", Verification.verifyLogin, upload.single("image"), updateBlog);

// delete a workout
router.delete("/:id", Verification.verifyLogin, deleteBlog);

export default router;
