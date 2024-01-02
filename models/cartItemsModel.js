import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/connection.js";
import Cart from "./cartModel.js";
import Product from "./productModel.js";

const CartItem = sequelize.define("CartItem", {
  id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
 
});



// CartItem.sync({force:true});


export default CartItem;
