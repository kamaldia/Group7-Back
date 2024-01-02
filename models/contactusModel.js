import { DataTypes,Sequelize } from "sequelize";
import sequelize from "../config/connection.js";

const Contact = sequelize.define(
  "Contacts",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactMessage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactEmsil: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);
// Contact.sync();
export default Contact;