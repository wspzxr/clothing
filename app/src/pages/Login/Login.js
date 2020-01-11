import React,{Component} from 'react'
import style from './login.module.less'
import {withRouter} from 'react-router-dom'
import {Button,Card,Form,Input,Icon,message} from 'antd'
import {setItem,getItem} from '../../utils/webStorage'
import {UserLogin} from '../../api/user'

class Login extends Component{
  componentDidMount(){
    if(getItem('token')){
      this.props.history.replace('/admin/home')
    }
  }
  login=()=>{
    // 是form不是from记住 不然总报错
    let {getFieldsValue,validateFields} = this.props.form
    // console.log(validateFields())
    validateFields((err,data)=>{
      // console.log(err,data)
      if(err){
        message.error('输入有误！')
      }else{
        // 发起网络请求
        let {userName,passWord} = data
        console.log(data);
        
        console.log(userName,passWord);
        UserLogin(userName,passWord)
        .then((res)=>{
          setItem('token',res.token)
          setItem('uid',res.uid)
          setItem('rootIds',['1','2','3-0','3-1','3-2'])
          message.success('登录成功，3s后跳转',1,()=>{
            this.props.history.replace('./admin/home')
          })
        })
                   .catch((err)=>{message.error(err.msg);
                   })
      }
    })
  }
  render(){
    // console.log(this)
    // 帮助我们实现数据双向绑定
    const {getFieldDecorator} = this.props.form
    return(
      <Card className={style.login}>
        <div className={style["login-form"]}>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [ // 这里规定表单的一些规则
                { required: true, message: '用户名不能为空!' },
                { min:3, message: '最小长度为3个字符!' },
                { max:9, message: '最大长度为9个字符!' }
              ]
            })(
              <Input style={{height:'40px'}}
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('passWord', {
              rules: [ // 这里规定表单的一些规则
                { required: true, message: '用户名不能为空!' },
                { min:3, message: '最小长度为3个字符!' },
                { max:9, message: '最大长度为9个字符!' }
              ]
            })(
              <Input style={{height:'40px'}}
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {/* {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)} */}
            <a className={style["login-form-forgot"]} href="">
              忘记密码？
            </a>
            <Button type="primary" onClick={this.login}
              className={style["login-form-button"]}
            >
              登录
            </Button>
            <a href="">register now!</a>
          </Form.Item>
        </div>
      </Card>
    )
  }
}
export default Form.create({})(withRouter(Login))