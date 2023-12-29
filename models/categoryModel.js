import { DataTypes,Sequelize } from "sequelize";
import sequelize from "../config/connection.js";

const Category = sequelize.define("Categories", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
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
// Category.sync();
export default Category;