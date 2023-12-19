import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import Description from "./descriptionModel.js";
import Category from "./categoryModel.js";

const Product = sequelize.define("Products", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  imagePath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, { timestamps: true }
);

Category.hasMany(Product);
Product.belongsTo(Category);

Description.hasOne(Product);
Product.belongsTo(Description);

Product.sync();
export default Product;