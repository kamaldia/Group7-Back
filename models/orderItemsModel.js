import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/connection.js";
import Order from "./orderModel.js";
import Product from "./productModel.js";

const OrderItem = sequelize.define("OrderItem", {

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// OrderItem.sync();

export default OrderItem;
