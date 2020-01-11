import React, { Component,Fragment } from 'react'
import {Button,message,Popconfirm, Spin, Table, Pagination, Drawer} from 'antd'
import {GetBooks,DelBook} from '../../api/book'
import BookUpdate from './update'

class Book extends Component{
  constructor(){
    super()
    this.state={
      nowPage:1,
      total:0,
      pageSize:7,
      spinning:false,
      drawerShow:false,
      data:[],
      updateData:{},//要修改的数据
      colums:[
        {
          title:'标题',
          dataIndex:'title',
          key:'title',
          fixed:'left',
          width:250,
        },
        {
          title:'阅读权限',
          dataIndex:'permission',
          key:'permission',
          width:150,
        },
        {
          title:'文章分类',
          dataIndex:'arttype',
          key:'arttype',
          width:150,
        },
        {
          title:'置顶',
          dataIndex:'settop',
          key:'settop',
          width:150,
        },
        {
          title: '操作',
          key: 'action',
          width:180,
          // dataIndex:'_id',
          fixed:'right',
          render:(record)=> {
            return(
              <div>
                <Popconfirm
                  title='你确定要删除吗?'
                  onConfirm={()=>{
                   this.del(record._id)
                  }}
                  onCancel={()=>{
                    message.info('取消删除')
                  }}
                  okText='删除'
                  cancelText="取消"
                >
                  <Button type='danger' size='small'>删除</Button>
                </Popconfirm>
                <Button size='small' onClick={()=>{
                  console.log('要修改的数据',record)
                  this.setState({drawerShow:true,updateData:record})
                  }}>
                  修改
                </Button>
              </div>
            )
          }
        }
      ]
    }
  }
  componentDidMount(){
    this.getTableData(1,7)
  }
  getTableData(nowPage,pageSize){
    this.setState({spinning:true})
    GetBooks(nowPage,pageSize)
    .then((res) => {
      let {books,allCount} = res.list
      this.setState({data:books,spinning:false,total:allCount})
      console.log(res.list)
    })
  }
  del(id){
    DelBook(id)
    .then(() => {
      this.getTableData()
    })
  }
  closeDrawer = () => {
    this.setState({drawerShow:false})
    this.getTableData(this.nowPage,this.pageSize)
  }
  render(){
    let {colums,data,spinning,total,pageSize,drawerShow,updateData} = this.state
    return(
      <Fragment>
        <Spin spinning={spinning}>
          <Table pagination={false} rowKey='_id' scroll={{x:500,y:800}} columns={colums} dataSource={data}></Table>
          <Pagination total={total} pageSize={pageSize} onChange={(nextPage,pageSize) => {
            this.getTableData(nextPage,pageSize)
          }}>
          </Pagination>
        </Spin>
        {/* 抽屉 */}
        <Drawer
          title="文章管理页内容修改"
          placement="right"
          closable={false}
          onClose={()=>{this.setState({drawerShow:false})}}
          visible={drawerShow}
          width="400">
          <BookUpdate updateData={updateData} closeDrawer={this.closeDrawer}></BookUpdate>
        </Drawer>
    </Fragment>)
  }
}

export default Book