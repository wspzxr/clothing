import React,{Component}from 'react'
import { Card, message} from 'antd'
import {AddFood} from '../../api/shop'
import style from './css/add.module.less'

class UserList extends Component{
  constructor(){
    super()
    this.state={
      name:'',
      price:'',
      img:null,
      foodType:'',
      desc:''
    }
  }
  upload=()=>{
    let file = this.refs.file.files[0]
    console.log(file)
    console.log(this.state)
    // 将图片编程base64
    let readObj = new FileReader()
    readObj.onload=()=>{
      console.log('文件读取完毕',readObj)
      message.success('图片上传完毕',1)
      this.setState({img:readObj.result})
    }
    // readAsDataURL用来读取图片
    readObj.readAsDataURL(file)
  }
  submit=()=>{
    // 发起请求name,img 为参数
    if(!this.state.img){return message.info('请先上传图片',1)}
    AddFood(this.state).then((res)=>{ // 调用添加接口
      console.log(res.msg)
      message.success('添加成功',1)
    })
    .catch((err)=>{
      message.error('图片上传失败请重试')
    })
  }
  render(){
    let {name,price,img,foodType,desc} =this.state
    return(
      <Card title="商品添加" className={style.shopAdd}>
        <label>名字:</label>
        <input className={style.shopInput} type="text" value={name} onChange={(e)=>{
          let value = e.target.value
          this.setState({name:value})
        }} /><br/><hr/>
        <label>价格:</label>
        <input className={style.shopInput} type="text" value={price} onChange={(e)=>{
          let value = e.target.value
          this.setState({price:value})
        }} /><br/><hr/>
        <label>类型:</label>
        <input className={style.shopInput} type="text" value={foodType} onChange={(e)=>{
          let value = e.target.value
          this.setState({foodType:value})
        }} /><br/><hr/>
        <label>描述:</label>
        <input className={style.shopInput} type="text" value={desc} onChange={(e)=>{
          let value = e.target.value
          this.setState({desc:value})
        }} /><br/><hr/>
        <label>图片:</label>
        <input className={style.shopInput} type="file" ref='file' /><br/><hr/>
        缩略图：<img width='100' height='100' src={this.state.img} alt="" />
        <button onClick={this.upload}>上传</button>
        <button onClick={this.submit}>提交</button>
      </Card>
    )
  }
}
/*
  添加功能 给用户提供一个输入内容的页面
  获取用户输入的信息  受控组件与分受控组件来做
  成功之后 1.关闭当前页面去列表页 2.添加完成 还可重复添加
  图片上传  方式  1.base64   2.fromdata
  上传方式有后端决定
*/
export default UserList