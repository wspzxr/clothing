import React,{Component} from 'react'
import { Menu, Icon } from 'antd'
import {Link} from 'react-router-dom'
import {getList} from './getList'

const { SubMenu } = Menu;
class CustomNav extends Component{
  constructor(){
    super()
    // 默认列表list
    this.state={list:[]}
  }
  componentDidMount(){// 挂载时列表
    setTimeout(()=>{
      var netlist = ['0','1-0','1-1','2-0','2-1','3-0','3-1','4','5']
      let list = getList(netlist)
      this.setState({list:list})
    },1000)
  }
  renderMenu(item,index){
    if(item.children){
      // 这是二级菜单
      return(
        <SubMenu title={
          <span>
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </span>
          } key={item.id}
        >
          {item.children.map((childItem,childIndex)=>{
            return this.renderMenu(childItem)// 递归自调用
          })}
        </SubMenu>
      )
    }else{
      // 一级菜单
      return(
        <Menu.Item key={item.id}>
          <Link to={"/admin"+item.path}>
            <span>
              <Icon type={item.icon || "setting"} />
              <span>{item.name}</span>
            </span>
          </Link>
        </Menu.Item>
      )
    }
  }
  render(){
    return(
      <Menu mode="inline" defaultSelectedKeys={['0']}>
        {/* 这里开始应用权限list */}
        {this.state.list.map((item,index)=>{
          return(this.renderMenu(item))
        })}
      </Menu>
    )
  }
}
export default CustomNav