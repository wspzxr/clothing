const express = require('express')
const router =express.Router()

const Login = require('./adminRouter/adminUserRouter')
const Root = require('./adminRouter/adminRootRouter')
const Book = require('./adminRouter/adminBookRouter')
const Food = require('./adminRouter/adminFoodRouter')
// 用户登录相关
router.use('/user',Login)
// 权限管理相关
router.use('/root',Root)
// 商品管理相关
router.use('/book',Book)
// 商品管理相关
router.use('/shop',Food)
module.exports=router