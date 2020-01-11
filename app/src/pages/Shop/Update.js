import React,{Component, Fragment}from 'react'
import {Button,message} from 'antd';
import {UpdateFood} from '../../api/shop'
import style from './css/update.module.less'

class FoodUpdate extends Component{
  constructor(props){
    console.log('props',props)
    super()
    // 接受到默认值
    this.state = props.updateData
  }
  componentWillReceiveProps(props,state){
    console.log('props 改变')
    let  {_id,name,price,img,foodType,desc}=props.updateData 
    this.setState({_id,name,price,img,foodType,desc})
  }
  upload=()=>{
    let file=this.refs.file.files[0]
    let reader =new FileReader() 
    reader.onload=()=>{
      this.setState({img:reader.result})
    }
    reader.readAsDataURL(file)
  }
  submit=()=>{
    UpdateFood(this.state).then((res)=>{// 调用修改接口
      console.log(res)
      message.success('修改成功',0.5,()=>{
        this.props.closeDrawer()
      })
    })
  }
  render(){
    let {_id,name,price,img,foodType,desc} = this.state
    // console.log(this)
    return(
      <Fragment>
         商品编号:{_id}<br/>
         名称:<input className={style.shopInput} type='text' value={name} onChange={(e)=>{
           let value =e.target.value
           this.setState({name:value})
         }}></input>
         <br/>
         价格:<input className={style.shopInput} type='text' value={price} onChange={(e)=>{
           let value =e.target.value
           this.setState({price:value})
         }}></input>
         <br/>
         商品类型:<input className={style.shopInput} type='text' value={foodType} onChange={(e)=>{
           let value =e.target.value
           this.setState({foodType:value})
         }}></input>
         <br/>
         描述:<input className={style.shopInput} type='text' value={desc} onChange={(e)=>{
           let value =e.target.value
           this.setState({desc:value})
         }}></input>
         <br/>
         <input type="file" ref='file'/>
         <Button size='small' onClick={this.upload}>图片上传</Button>
         <br/>
         <img width='100' height='100' src={img} alt=""></img><br/>
        <Button onClick={this.submit}>修改</Button>
      </Fragment>
    )
  }
}
export default FoodUpdate