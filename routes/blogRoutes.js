import express from "express";
import upload from "../middlewares/uploadMiddleware.js";

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
router.get("/:id", getBlogById);

// get all blogs
router.get("/", getAllBlogs);

// post a new blog
router.post("/", upload.single("image"), createBlog);

//update a blog
router.patch("/:id", upload.single("image"), updateBlog);

// delete a workout
router.delete("/:id", deleteBlog);

export default router;
