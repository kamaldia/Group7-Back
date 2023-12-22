import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import Description from "../models/descriptionModel.js";


//Get all
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({order:[['createdAt','DESC']]})
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

//get Single
export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id)
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
  const { name, description, price, featured } = req.body;
  const pathes = req.files.map((each) => each.path);

  try {
    if (!name || !description || !price || pathes.length === 0) {
      return res.status(400).json({ error: "Missing required fields" });
    }
   
    const newProduct = await Product.create({
      name,
      description,
      price,
      imagePath: pathes,
      featured: featured || false,
      // categoryId,
      // descriptionId: descriptionId,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error creating the product" });
  }
};

//delete Single
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.destroy({where:{ id }});
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error deleting the product" });
  }
};

//Update
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  let pathes = [];
  try {
    if (req.files) {
      pathes = req.files.map((each) => each.path);
    }
    const updatedProduct = Product.update({...req.body,imagePath:pathes},{where:{id}})
    
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const foundCategory = await Category.findOne({where:{ categoryName: category }});
    if (!foundCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    const products = await Product.findAll({where:{ categoryId: foundCategory.id }})
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
