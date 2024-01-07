import Product from "./models/productModel.js";
import Cart from "./models/cartModel.js";
import CartItem from "./models/cartItemsModel.js";
import Category from "./models/categoryModel.js";
import Description from "./models/descriptionModel.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import OrderItem from "./models/orderItemsModel.js";



User.hasMany(Order);
Order.belongsTo(User);


User.hasOne(Cart);
Cart.belongsTo(User);

Product.belongsToMany(Order, { through: OrderItem });
Order.belongsToMany(Product, { through: OrderItem });

// OrderItem.belongsTo(Order, { foreignKey: "OrderId" });
// OrderItem.belongsTo(Product, { foreignKey: "ProductId" });

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

Category.hasMany(Product, { foreignKey: { allowNull: true } });
Product.belongsTo(Category, { foreignKey: { allowNull: true } });

// Description.hasOne(Product, { foreignKey: { allowNull: true } });
// Product.belongsTo(Description, { foreignKey: { allowNull: true } });