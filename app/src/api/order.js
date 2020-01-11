import axios from '../utils/axios'

export const GetOrder= async (page=1,pageSize=7)=>{
    let res = await axios.post('/clothing/v1/admin/order/getOrder',{page,pageSize})
    if(res.err!==0){
      throw res
    }
    return res
}

// 删除
export const DelOrder= async (foodId)=>{
    let res = await axios.post('/clothing/v1/admin/order/delOrder',{foodId})
    if(res.err!==0){
      throw res
    }
    return res
  }

  // 添加
// export const AddBook= async (obj)=>{
//   let res = await axios.post('/clothing/v1/admin/book/addBook',{...obj})
//   if(res.err!==0){
//     throw res
//   }
//   return res
// }

// 更新
export const UpdateBook= async (obj)=>{
  // 接口数据需要一个foodId  将_id 转化为foodId
  let data={...obj}
  data.foodId=data._id

  let res = await axios.post('/clothing/v1/admin/book/updateBook',data)
  if(res.err!==0){
    throw res
  }
  return res
}