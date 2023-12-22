import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import Description from "../models/descriptionModel.js";

import mongoose from "mongoose";

//Get all
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
      .sort({ createdAt: -1 })
      .populate("categoryId")
      .populate("attributes");
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

//get Single
export const getProductById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }

  try {
    const product = await Product.findById({ _id: id })
      .populate("categoryId")
      .populate("attributes");
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error fetching product" });
  }
};

//Create new
export const createProduct = async (req, res) => {
  const { name, description, price, featured, categoryId, descriptionId } = req.body;
  console.log("this is body in product controller: ", req.body);
  const pathes = req.files.map((each) => each.path);
  console.log("this is pathes in product controller: ", req.files);
  try {
    if (!name || !description || !price || !categoryId || !descriptionId || pathes.length === 0) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const newProduct = new Product({ // we will have to add a description in front end
      name,
      description,
      price,
      featured: featured || false,
      imagePath: pathes[0],
      categoryId,
      descriptionId,
    });
    console.log("this is newProduct in product controllr: ", newProduct)
    const savedProduct = await newProduct.save();
    console.log("this is savedProduct in product controllr: ", savedProduct)
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error creating the product" });
  }
};

//delete Single
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete({ _id: id });
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    await Description.findByIdAndDelete({ _id: deletedProduct.attributes });
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error deleting the product" });
  }
};

//Update
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  let { attributes, category, featured, ...updateFields } = req.body;
  let categoryId;
  let pathes = [];
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }

  try {
    if (req.files) {
      pathes = req.files.map((each) => each.path);
    }
    const product = await Product.findById({ _id: id });

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    if (attributes) {
      let parsedAttributes = JSON.parse(attributes);

      await Description.findByIdAndUpdate(
        product.attributes._id,
        parsedAttributes
      );
    }

    if (category) {
      const findCategory = await Category.findOne({
        categoryName: category,
      });
      if (findCategory) {
        categoryId = findCategory._id;
      }
    }

    const updateObject = { ...updateFields };
    if (categoryId) {
      updateObject.categoryId = categoryId;
    }

    if (pathes.length > 0) {
      updateObject.imagePath = pathes;
    }
    if (typeof featured !== "undefined") {
      updateObject.featured = featured;
    } else {
      updateObject.featured = product.featured;
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, updateObject, {
      new: true,
    })
      .populate("categoryId")
      .populate("attributes");

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const foundCategory = await Category.findOne({ categoryName: category });
    if (!foundCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    const products = await Product.find({ categoryId: foundCategory._id })
      .populate("categoryId")
      .populate("attributes");

    if (products.length === 0) {
      return res
        .status(404)
        .json({ error: `No products found in category '${category}'` });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching products by category" });
  }
};
