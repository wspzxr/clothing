const express = require('express')
const router = express.Router()
const Food = require('../../control/shopController')

//查询接口（分页查询  分类查询 关键字查询）
router.post('/getShops',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize=Number(req.body.pageSize)||2
  Food.get(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询失败'})})
})
// 分类查询
router.post('/getShopsByType',(req,res)=>{
  let {foodType} = req.body 
  let page=Number(req.body.page)||1
  let pageSize = Number(req.body.pageSize)||2
  Food.getByType(foodType,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
})
// 关键字查询
router.post('/getShopsByKw',(req,res)=>{
  let page=Number(req.body.page)||1
  let pageSize = Number(req.body.pageSize)||2
  let kw = req.body.kw 
  Food.getByKw(kw,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'ok',list:data})
  })
})
//删除接口
router.post('/delShop',(req,res)=>{
  let {foodId}=req.body
  Food.del(foodId)
  .then((data)=>{
    res.send({err:0,msg:'del ok'})
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:'del nook'})
  })
})
//添加数据
router.post('/addShop',(req,res)=>{
  let {name,price,img,foodType,desc} = req.body 
  Food.add(name,price,img,foodType,desc)
  .then((data)=>{res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败'})})
})
//修改 
router.post('/updateShop',(req,res)=>{
  console.log(111)
  let {foodId,name,price,img,foodType,desc} = req.body
  Food.update(foodId,name,price,img,foodType,desc)
  .then((data)=>{res.send({err:0,msg:'修改ok'})})
  .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
})
module.exports = router