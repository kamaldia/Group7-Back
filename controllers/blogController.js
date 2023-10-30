import Blog from "../models/blogModel.js";
import mongoose from "mongoose";

// get a single Blog
const getBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Not valid ID" });
    }
    const singleBlog = await Blog.findById(id);

    if (!singleBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(singleBlog);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the requested Blog" });
  }
};

// get all Blogs
const getAllBlogs = async (req, res) => {
  try {
    const Blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(Blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Blog posts" });
  }
};
// create a new Blog
const createBlog = async (req, res) => {
  const { title, author, content, date, image } = req.body;

  //add Blog to db
  try {
    const newBlog = new Blog(req.body);
    newBlog.image = req.file.path;

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ error: "Failed to create a new Blog post" });
  }
};

//update a Blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Failed to update" });
    }
    const upBlog = req.body;
    if (req.file) {
      upBlog.image = req.file.path;
    }

    // Update the Blog post
    const updatedBlog = await Blog.findByIdAndUpdate(id, upBlog);

    if (!updatedBlog) {
      return res.status(400).json({ error: "Blog not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the Blog post" });
  }
};

//delete a Blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.status(204).send(); // the server successfully processed the client's request, and that the server is not returning any content.
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the Blog post" });
  }
};

export { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
