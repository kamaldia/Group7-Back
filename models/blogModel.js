import { DataTypes,Sequelize } from "sequelize";
import sequelize from "../config/connection.js";

const Blog = sequelize.define(
  "Blogs",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);
// Blog.sync();
export default Blog;