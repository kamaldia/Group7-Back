import  Blog  from "../models/blogModel.js";

// get a single Blog
const getBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    const singleBlog = await Blog.findByPk(id);

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
    const blogs = await Blog.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve Blog posts" });
  }
};

// create a new Blog
const createBlog = async (req, res) => {
  const { title, author, content, date } = req.body;
  const image = req.file.path;

  //add Blog to db
  try {
    const savedBlog = await Blog.create({title,author,content,date,image});
    res.status(201).json(savedBlog);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to create a new Blog post" });
  }
};

//update a Blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const upBlog = req.body;
    if (req.file) {
      upBlog.image = req.file.path;
    }

    // Update the Blog post
    const [updated] = await Blog.update(upBlog, { where: { id } });

    if (!updated) {
      return res.status(400).json({ error: "Blog not found" });
    }

    const updatedBlog = await Blog.findOne({ where: { id } });
    res.status(200).json({ message: "Blog updated", updatedBlog });
  } catch (error) {
    res.status(500).json({ error: "Failed to update the Blog post" });
  }
};

//delete a Blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Blog.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.status(200).json({message:`article was deleted successfully`}); // the server successfully processed the client's request, and that the server is not returning any content.
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the Blog post" });
  }
};

export { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
