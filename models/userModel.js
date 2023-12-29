import { DataTypes,Sequelize } from "sequelize";
import sequelize from "../config/connection.js";
import Order from "./orderModel.js";
import Cart from "./cartModel.js";

const User = sequelize.define("Users", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
});


// User.sync();
export default User;