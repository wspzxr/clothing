// 这里是权限列表处理
import arrList from './ArrList'
export const getList=(arrIds)=>{
  // console.log(arrList,arrIds)
  let result=[]
  arrList.map((item,index)=>{
    if(arrIds.indexOf(item.id)!==-1){// 首次出现不等于-1的
      // 第一层级判断
      result.push(item)
    }else{
      // 如果第一季没有判断到就判断他有没有children子集
      if(item.children){
        let tmp={...item} // 临时变量 里边保存二级项数据
        tmp.children=[]  // 先将二级项中childern变成空
        item.children.map((cItem,cIndex)=>{// 遍历
          if(arrIds.indexOf(cItem.id)!==-1){
            // 子节点满足条件 做添加
            tmp.children.push(cItem)
          }
          return  item
        })
        // 如果二级数据childern中存在相关项 满足显示条件进行添加 
        // 如果children为空说明该项数据不需要显示
        if(tmp.children.length>0){
          result.push(tmp)
        }
      }
    }
  })
  return result
}