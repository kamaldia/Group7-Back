import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Admin = sequelize.define("Admins", {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
});
Admin.sync();
export default Admin;
