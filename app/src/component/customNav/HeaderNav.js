import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {clear, getItem} from '../../utils/webStorage'
import {Dropdown,Menu,Icon} from 'antd'
import {UserLogout} from '../../api/user'
let arr = [
  {name:"个人中心",icon:'home',id:1},
  {name:'个人设置',icon:'setting',id:2},
  {name:'退出登录',icon:'usergroup-delete',id:3}
]
class HeaderNav extends Component{
  jump(id){
    switch(id){
      case 1:
        this.props.history.push('/admin/user/center')
        break;
      case 2:
        this.props.history.push('/admin/user/center')
        break;
      default:
        let uid = getItem('uid')||''
        UserLogout(uid)
        .then(()=>{
            clear()
            this.props.history.replace('/login')
        })
        break;
    }
  }
  renderMenu(){
    return(
      <Menu style={{color:'#333333'}}>
        {arr.map((item,index)=>{
          return(   
            <Menu.Item key={index} style={{color:'#333333'}} onClick={this.jump.bind(this,item.id)}>
              <span>
                <Icon type={item.icon}>
                </Icon>
                <span>{item.name}</span>
              </span>
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }
  render(){
      {/* 下拉菜单 */}
      return(
      <Dropdown overlay={this.renderMenu()}>
        <a className="ant-dropdown-link" href="#">
          用户信息 <Icon type="down" />
        </a>
      </Dropdown>
      )
  }
}
export default withRouter(HeaderNav) 