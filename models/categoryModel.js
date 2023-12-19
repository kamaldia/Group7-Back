import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Category = sequelize.define("Categories", {
  categoryName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  categoryImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Category.sync();
export default Category;