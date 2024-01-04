import { DataTypes,Sequelize } from "sequelize";
import sequelize from "../config/connection.js";

const Advertisement = sequelize.define("Advertisement", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    defaultValue: "Advertisement title",
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// Advertisement.sync();
export default Advertisement;