import React,{Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon  } from 'antd';
import style from './admin.module.less'
import CustomNav from '../../component/customNav/customNav'

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
class Admin extends Component{
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render(){
    return(
      <Layout style={{width:'100vw',height:'100vh'}}>
        {/* 头部 */}
        <Header  className="header" style={{background:'#0099ff'}}>
          <div className={style.logo} />
        </Header>
        <Layout>
          {/* 侧边栏 */}
          <Sider collapsible theme="light">
            <CustomNav></CustomNav>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* 面包屑导航 */}
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            {/* 内容 */}
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 700,
              }}>
              {this.props.children}
            </Content>
            {/* 底部 */}
            <Footer className={style.footer}>
              Clothing&nbsp;&copy;&nbsp;2019&nbsp;Created By My Progect&nbsp;版权所有&nbsp;&nbsp;ZZY-11521
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
export default Admin