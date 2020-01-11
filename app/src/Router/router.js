import React,{Component} from 'react'
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Admin from '../pages/Admin/Admin'
import Home from '../pages/Home/Home'
import Book from '../pages/book/book'
import AddBook from '../pages/book/add'
import ShopList from '../pages/Shop/List'
import ShopAdd from '../pages/Shop/Add'
import Order from '../pages/Order/order'
import Conter from "../pages/book/conter";
class Router extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Redirect exact from='/' to='/login'></Redirect>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' render={()=>{
            return(
              <Admin>
                <Switch>
                  <Route path="/admin/home" component={Home}></Route>
                  {/* 用户相关 */}
                  <Route path="/admin/shop/list" component={ShopList}></Route>
                  <Route path="/admin/shop/add" component={ShopAdd}></Route>
                  <Route path="/admin/book/list" component={Book}></Route>
                  <Route path="/admin/book/addbook" component={AddBook}></Route>
                  <Route path="/admin/goods/list" component={Order}></Route>

                  <Route path="/admin/conter" component={Conter}></Route>
                </Switch>
              </Admin>
            )
          }}></Route>
          <Route path='/home' component={Home}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default Router