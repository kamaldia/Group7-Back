import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Advertisement = sequelize.define(
  "Advertisements",
  {
    title: {
      type: DataTypes.STRING,
      defaultValue: "Advertisement title",
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamp: true }
);
Advertisement.sync();
export default Advertisement;