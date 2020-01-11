import React,{Component,Fragment} from 'react'
import {Drawer,Table,Popconfirm,message,Spin,Button,Pagination,Card} from 'antd';
import {GetFoods,DelFood} from '../../api/shop'
import FoodUpdate from './Update'

class UserList extends Component{
    constructor(){
      super()
      this.state={
        nowPage:1,
        total:0,
        pageSize:3,
        spinning:false,
        drawerShow:false,
        data:[],
        updateData:{},// 要修改的数据
        columns:[
          {
            title: '商品名称',
            dataIndex: 'name',
            key: 'name',
            fixed:'left',
            width:130
          },
          {
            title: '商品价格',
            dataIndex: 'price',
            key: 'price',
            width:120
          },
          {
            title: '商品类型',
            dataIndex: 'foodType',
            key: 'foodType',
            width:120,
          },
          {
            title: '商品图片',
            dataIndex: 'img',
            key: 'img',
            width:130,
            render(data){
              return(<img width='100' height='100' src={data} />)
            }
          },
          {
            title: '商品描述',
            dataIndex: 'desc',
            key: 'desc',
            width:350
          },
          {
            title: '操作',
            key:'action',
            fixed:'right',
            width:180,
            // dataIndex:'_id',
            render:(record)=>{
              // console.log('操作数据',record)
              return(
                <div>
                  <Popconfirm
                    title="你确定要删除这条信息吗?"
                    onConfirm={(_id)=>{
                      message.info('删除成功')
                      this.del(record._id)
                    }}
                    onCancel={(_id)=>{
                      message.info('已取消删除')
                    }}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button size="small" type="danger">删除</Button>
                  </Popconfirm>
                  <Button size="small" onClick={()=>{
                    console.log('要修改的数据',record)
                    this.setState({drawerShow:true,updateData:record})
                  }} >修改</Button>
                </div>
              )
            }
          }
        ]
      }
    }
    componentDidMount(){
      this.getTableData(1,4)
    }
    getTableData(nowPage,pageSize){
      // 发起网络请求 获取数据并更新界面
      this.setState({spinning:true})
      // 调用获取接口 这里获取列表数据
      GetFoods(nowPage,pageSize).then((res)=>{
        let {foods,allCount} = res.list
        console.log(res)
        // console.log(nowPage,pageSize)
        this.setState({data:foods,spinning:false,total:allCount})
      })
    }
    del(id){
      // 获取要删出的id
      // 根据要删除的id发起请求
      // 更新页面
      DelFood(id).then(()=>{// 调用删除接口
        this.getTableData()
      })
    }
    // 更新完毕操作
    closeDrawer=()=>{
      console.log(this)
      // 1抽屉关闭
      this.setState({drawerShow:false})
      // 2刷新页面
      this.getTableData(this.state.nowPage,this.state.pageSize)
    }
    render(){
      let {columns,data,spinning,total,pageSize,drawerShow,updateData} = this.state
      return(
        <Fragment>
          <Card title="商品列表">
          <Spin spinning={spinning}>
            <Table pagination={false} rowKey='_id' scroll={{x:500,y:360}} columns={columns} 
              dataSource={data}></Table>
            <Pagination total={total} pageSize={pageSize} onChange={(nextPage,pageSize)=>{
              // console.log(nextPage,pageSize)
              this.getTableData(nextPage,pageSize)
            }}></Pagination>
          </Spin>
          </Card>
          {/* 修改的抽屉 */}
          <Drawer
            title="菜品修改"
            placement="right"
            width="300"
            closable={false}
            onClose={()=>{this.setState({drawerShow:false})}}
            visible={drawerShow}
          >
            <FoodUpdate updateData={updateData} closeDrawer={this.closeDrawer}></FoodUpdate>
          </Drawer>
        </Fragment>
      )
    }
  }
  export default UserList