import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const User = sequelize.define("Users", {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
});
User.sync();
export default User;
