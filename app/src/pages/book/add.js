import React, { Component } from 'react'
import {message} from 'antd'
import {AddBook} from '../../api/book'

class AddList extends Component{
  constructor(){
    super()
    this.state={
      title:'',
      permission:'',
      arttype:'',
      settop:''
    }
  }
  submit = () => {
    console.log(this.state)
    AddBook(this.state)
    .then((res) => {
      console.log('res',res)
      message.success('商品数据提交成功!')
    })
    .catch((err) => {
      console.log('err',err)
      message.error('数据上传失败 请重试!')
    })
  }
  render(){
    let{title,permission,arttype,settop} = this.state
    return(
      <div>
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
          <button onClick={this.submit}>提交商品数据</button>
      </div>
    )
  }
}

export default AddList