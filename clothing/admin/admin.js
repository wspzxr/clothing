const express = require('express')
const router =express.Router()

const Login = require('./adminRouter/adminUserRouter')
const Root = require('./adminRouter/adminRootRouter')
<<<<<<< HEAD
const Book = require('./adminRouter/adminFoodRouter')
const Order = require('./adminRouter/adminOrderRouter')
=======
const Book = require('./adminRouter/adminBookRouter')
const Shop = require('./adminRouter/adminShopRouter')
>>>>>>> ccbe639156c4b49e9f770bc4d68bf53d056f5c45
// 用户登录相关
router.use('/user',Login)
// 权限管理相关
router.use('/root',Root)
// 商品管理相关
router.use('/book',Book)
<<<<<<< HEAD

router.use('/order',Order)
=======
// 商品管理相关
router.use('/shop',Shop)
>>>>>>> ccbe639156c4b49e9f770bc4d68bf53d056f5c45
module.exports=router