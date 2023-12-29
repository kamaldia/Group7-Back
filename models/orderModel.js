import { Sequelize } from "sequelize";
import sequelize from "../config/connection.js";
import User from "./userModel.js";
const Order = sequelize.define("Order", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
});



// Order.sync();

export default Order;
