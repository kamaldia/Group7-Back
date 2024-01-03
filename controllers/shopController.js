import User from "../models/userModel.js";
import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";
import CartItem from "../models/cartItemsModel.js";
import OrderItem from "../models/orderItemsModel.js";

export const getCart = async(req,res,next) =>{
    var cart
      cart = await req.user.getCart();
    if(!cart) {
        // cart = await req.user.createCart()
        return res.status(404).json({message:'Cart is empty!'})
    }
    const products = await cart.getProducts()
    if(!products){
        return res.status(404).json({ message: "Cart is empty!" });

    }
    res.status(200).json({products});

}

export const addToCart = async(req,res,next) =>{
    const {prodId} = req.body
    const cart = await req.user.getCart()
    var product = await CartItem.findOne({where:{id:prodId}})
    if(product){
       return res.status(300).json({message:'product already exist'})
    }
    product = await Product.findByPk(prodId);
    
   await cart.addProduct(product,{through:{quantity:1}})
   return res.status(200).json({cart:cart,product:product})

}

export const deleteCart = async(req,res,next) =>{
    try{
    const cart = await req.user.getCart()
    console.log(cart);
    if(!cart){
        return res.status(404).json({message:'Cart is empty!'})
    }
    await cart.destroy();
    res.status(200).json({message:'Cart is deleted!'})
    }catch(err){
        console.log(err);
    }

}
export const deleteProductFromCart = async(req,res,next) =>{
    const {prodId} = req.body
    try{
        const cart = await req.user.getCart()
         const product = await cart.removeProduct(prodId)
         res.status(200).json({product:product,message:'product was removed successfully!'})
    }catch(err){
        console.log(err);
    }
}

export const getOrders = async(req,res,next) =>{
    try{
        const orders = await req.user.getOrders({include:['Products']});
        if(!orders){
            return res.status(404).json({message:'No orders!'})
        }
        res.status(200).json(orders)
    }catch(err){
        console.log(err);
    }
}


export const createOrder = async(req,res,next) =>{
    try{
        const cart = await req.user.getCart()
        if(!cart){
            res.status(400).json({message:"Cart is empty!"})
        }
        const products = await cart.getProducts()
        if(!products){
        return res.status(404).json({ message: "Cart is empty!" });
    }
    const order = await req.user.createOrder()
    const orderItems = await order.addProducts(products.map(product=>{
        product.OrderItem = {quantity:product.CartItem.quantity}
        return product
    }))
        await cart.setProducts(null)
    res.status(200).json({order:orderItems})

    }catch(err){
        console.log(err);
    }
}