const express = require('express')
const router =express.Router()

const Login = require('./adminRouter/adminUserRouter')
const Root = require('./adminRouter/adminRootRouter')
// const Food = require('./adminRouter/adminFoodRouter')
const Order = require('./adminRouter/adminOrderRouter')
const Book = require('./adminRouter/adminBookRouter')
const Shop = require('./adminRouter/adminShopRouter')
// 用户登录相关
router.use('/user',Login)
// 权限管理相关
router.use('/root',Root)
// 商品管理相关
router.use('/book',Book)

router.use('/order',Order)
// 商品管理相关
router.use('/shop',Shop)
module.exports=router