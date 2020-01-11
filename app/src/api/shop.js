import axios from '../utils/axios'
// 商品的获取
export const GetFoods = async (page=1,pageSize=3)=>{
  let res = await axios.post('/clothing/v1/admin/food/getfoods',{page,pageSize})
  if(res.err!==0){
    throw res
  }
  return res
}
// 删除
export const DelFood = async (foodId)=>{
  let res = await axios.post('/clothing/v1/admin/food/delFood',{foodId})
  if(res.err!==0){
    throw res
  }
  return res
}
// 添加
// name,price,img,foodType,desc
export const AddFood = async (obj)=>{
  let res = await axios.post('/clothing/v1/admin/food/addFood',{...obj})
  if(res.err!==0){
    throw res
  }
  return res
}
// 更新
export const UpdateFood= async (obj)=>{
  // 接口数据需要一个foodId  将_id 转化为foodId
  console.log(obj)
  let data={...obj}
  data.foodId=data._id
  let res = await axios.post('/clothing/v1/admin/food/updateFood',data)
  if(res.err!==0){
    throw res
  }
  return res
}
