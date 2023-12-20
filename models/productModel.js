import { DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import Description from "./descriptionModel.js";
import Category from "./categoryModel.js";

const Product = sequelize.define(
  "Products",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    imagePath: {
      type: DataTypes.TEXT,
      allowNull: false,
      set(value) {
        this.setDataValue("imagePath", JSON.stringify(value));
      },
      get() {
        const storedValue = this.getDataValue("imagePath");
        return storedValue ? JSON.parse(storedValue) : [];
      },
    },
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
);

Category.hasMany(Product,{foreignKey:{allowNull:true}});
Product.belongsTo(Category, { foreignKey: { allowNull: true } });

Description.hasOne(Product, { foreignKey: { allowNull: true } });
Product.belongsTo(Description, { foreignKey: { allowNull: true } });

Product.sync({force:false});
export default Product;