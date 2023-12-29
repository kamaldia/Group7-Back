import { Sequelize } from "sequelize";
import sequelize from "../config/connection.js";
import User from "./userModel.js";
const Cart = sequelize.define("Cart",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    }
});


// Cart.sync();

export default Cart;