import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Description = sequelize.define("Descriptions", {
  operatingSystem: {
    type: DataTypes.STRING,
  },
  camera: {
    type: DataTypes.STRING,
  },
  display: {
    type: DataTypes.STRING,
  },
  battery: {
    type: DataTypes.STRING,
  },
  ram: {
    type: DataTypes.STRING,
  },
  cpu: {
    type: DataTypes.STRING,
  },
  storage: {
    type: DataTypes.STRING,
  },
  accessoriesColor: {
    type: DataTypes.STRING,
  },
  accessoriesType: {
    type: DataTypes.STRING,
  },
  accessoriesBrand: {
    type: DataTypes.STRING,
  },
});
Description.sync();
export default Description;