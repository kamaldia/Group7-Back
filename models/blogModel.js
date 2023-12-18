import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Blog = sequelize.define(
  "Blogs",
  {
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
    date: {
      type: DataTypes.DATEONLY,
      defaultValue: Date.now.toString().split("T")[0],
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamp: true }
);
Blog.sync();
export default Blog;