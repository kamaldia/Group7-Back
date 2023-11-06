import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, "Category name is required"],
    unique: true,
  },
  categoryImage: {
    type: String,
    required: [true, "Category image is required"],
  },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
