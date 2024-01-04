import { DataTypes,Sequelize } from "sequelize";
import sequelize from "../config/connection.js";

const Admin = sequelize.define("Admins", {
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
// Admin.sync();
export default Admin;