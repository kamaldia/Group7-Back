import { Category } from "../models/categoryModel.js";

//Get all
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Error fetching categories" });
  }
};

//get Single
export const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Error fetching category" });
  }
};

//Create new
export const createCategory = async (req, res) => {
  try {
    const newCategory = {
      ...req.body,
      categoryImage: req.file.path,
    };

    const savedCategory = await Category.create(newCategory);
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//delete Single
export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await Category.destroy({ where: { id } });
    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(deletedCategory);
  } catch (error) {
    res.status(500).json({ error: "Error deleting the Category" });
  }
};

//update
export const updateCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const upCategory = {
      ...req.body,
      categoryImage: req.file ? req.file.path : undefined,
    };

    const [updated] = await Category.update(upCategory, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "Category not found" });
    }

    const updatedCategory = await Category.findByPk(id);
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
