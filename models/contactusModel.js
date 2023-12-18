import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";

const Contact = sequelize.define("Contacts", {
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
}, { timestamp: true }
);
Contact.sync();
export default Contact;
