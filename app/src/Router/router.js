import React,{Component} from 'react'
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Admin from '../pages/Admin/Admin'
import Home from '../pages/Home/Home'

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