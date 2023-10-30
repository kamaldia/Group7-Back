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
router.get("/blogs/:id", getBlogById);

// get all blogs
router.get("/blogs/", getAllBlogs);

// post a new blog
router.post("/blogs/", upload.single("image"), createBlog);

//update a blog
router.patch("/blogs/:id", upload.single("image"),updateBlog);

// delete a workout
router.delete("/blogs/:id", deleteBlog);

export default router;
