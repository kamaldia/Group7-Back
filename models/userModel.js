import { DataTypes,STRING,Sequelize } from "sequelize";
import sequelize from "../config/connection.js";
import Order from "./orderModel.js";
import Cart from "./cartModel.js";

const User = sequelize.define("Users", {
  id: {
    type: STRING,
    allowNull: false,
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: { //only for admins
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    defaultValue: 'user',
  },
});


// User.sync();
export default User;
