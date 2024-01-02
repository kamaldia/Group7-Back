import { DataTypes,Sequelize } from "sequelize";
import sequelize from "../config/connection.js";
import Category from "./categoryModel.js";
import Description from "./descriptionModel.js";
import Cart from "./cartModel.js";
import CartItem from "./cartItemsModel.js";
import Order from "./orderModel.js";
import OrderItem from "./orderItemsModel.js";
const Product = sequelize.define("Products", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
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
    type: DataTypes.TEXT,
    allowNull: false,
    set(value) {
      this.setDataValue("imagePath", JSON.stringify(value));
    },
    get() {
      const storedValue = this.getDataValue("imagePath");
      return storedValue ? JSON.parse(storedValue) : [];
    },
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});




// Product.sync();
export default Product;