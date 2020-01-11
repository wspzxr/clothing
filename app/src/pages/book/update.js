import React, { Component } from "react"
import {Card,message} from 'antd'
import { UpdateBook } from "../../api/book"

class FoodAdd extends Component{
  constructor(props){
      super()
      this.state=props.updateData
  }
  componentWillReceiveProps(props,state){
      let {_id,title,permission,arttype,settop} = props.updateData
      this.setState({_id,title,permission,arttype,settop})
  }
  submit = () => {
      UpdateBook(this.state)
      .then((res) => {
          console.log(res)
          message.success('文章数据修改成功!',0.5,() => {
              this.props.closeDrawer()
          })
      })
      .catch((err) => {
          message.error('保存失败请重试!')
      })
  }
  render(){
    let {_id,title,permission,arttype,settop} = this.state
    return(
      <Card title='文章修改'>
        id:{_id}<br/>
        &nbsp;标&nbsp;&nbsp;&nbsp;&nbsp;题&nbsp;:&nbsp;<input type='text' value = {title} onChange = {(e) => {
          let value = e.target.value
          this.setState({title:value})
        }}/>
        <br/>
        阅读权限:<input type="text" value={permission} onChange={(e)=>{
          let value=e.target.value
          this.setState({permission:value})
        }}/>
        <br/>
        文章分类:<input type="text" value={arttype} onChange={(e)=>{
          let value=e.target.value
          this.setState({arttype:value})
        }}/>
        <br/>
        &nbsp;置&nbsp;&nbsp;&nbsp;&nbsp;顶&nbsp;:&nbsp;<input type="text" value={settop} onChange={(e)=>{
          let value=e.target.value
          this.setState({settop:value})
        }}/>
        <br/>
        <button onClick={this.submit}>保存修改</button>
      </Card>
    )
  }
}

export default FoodAdd