import express from "express"
import Verification from '../middlewares/jwt.js';
import * as shopController from '../controllers/shopController.js'

const router = express.Router()

router.get('/cart', Verification.verifyLogin, shopController.getCart)
router.post('/cart', Verification.verifyLogin, shopController.addToCart)
router.delete('/cart', Verification.verifyLogin, shopController.deleteCart)
router.delete('/rmvProduct', Verification.verifyLogin, shopController.deleteProductFromCart)
router.get('/order', Verification.verifyLogin, shopController.getOrders)
router.post('/order', Verification.verifyLogin, shopController.createOrder)

export default router