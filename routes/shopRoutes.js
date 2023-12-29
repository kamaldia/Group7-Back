import express from "express"
import * as shopController from '../controllers/shopController.js'

const router = express.Router()

router.get('/cart',shopController.getCart)
router.post('/cart',shopController.addToCart)
router.delete('/cart',shopController.deleteCart)
router.delete('/rmvProduct',shopController.deleteProductFromCart)
router.get('/order',shopController.getOrders)
router.post('/order',shopController.createOrder)

export default router