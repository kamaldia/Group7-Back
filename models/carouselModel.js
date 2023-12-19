import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Carousel = sequelize.define("Carousels", {
  title: {
    type: DataTypes.STRING,
    defaultValue: "carousel title",
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Carousel.sync();
export default Carousel;