export const getItem=(key)=>{
    return JSON.parse(localStorage.getItem(key))
    // let data = window.localStorage.getItem(key)
    // // 如果localStorage没有找到对应的数据就返回false
    // if(!data){ return false } 
    // console.log('取值', data)
    // let obj = JSON.parse(data)
    // let gtime = (new Date()).getTime() // 取数据时间
    // if(gtime - obj.ctime >= obj.ptime){
    //   window.localStorage.removeItem(key)
    //   return null
    // }else {
    //   return obj.value
    // }
  }
  export const setItem=(key,value,ptime)=>{
    return JSON.stringify(localStorage.setItem(key,JSON.stringify(value)))
    // console.log(key, value)
    // let data = {}
    // data.ctime = (new Date()).getTime() // 存入时间
    // data.ptime = ptime || 7 * 24 * 60 * 1000  // 有效七天
    // data.value = value
    // window.localStorage.setItem(key, JSON.stringify(data))
  }
  export const  clear=()=>{
    localStorage.clear()
  }