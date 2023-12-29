import { DataTypes,Sequelize } from "sequelize";
import sequelize from "../config/connection.js";

const Carousel = sequelize.define("Carousel", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    defaultValue: "carousel title",
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// Carousel.sync();
export default Carousel;