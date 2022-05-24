import React, { Component } from 'react';
import { login } from '../../util/APIUtils';
import './Login.css';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../constants';

import Signup from '../signup/Signup';

import {
    Route,
    withRouter,
    Switch
  } from 'react-router-dom';
  

import { Form, Input, Button, Icon, notification } from 'antd';
const FormItem = Form.Item;

class Login extends Component {
    render() {
        const AntWrappedLoginForm = Form.create()(LoginForm)
        return (
        
            <div className='wrapper fadeInDown'>
                <h2 className="active">Login</h2>
                <div>
                    <AntWrappedLoginForm onLogin={this.props.onLogin} />
                </div>
            </div>
        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();   
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const loginRequest = Object.assign({}, values);
                login(loginRequest)
                .then(response => {
                    localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                    this.props.onLogin();
                }).catch(error => {
                    if(error.status === 401) {
                        notification.error({
                            message: 'River-HQ',
                            description: 'Your Username or Password is incorrect. Please try again!'
                        });                    
                    } else {
                        notification.error({
                            message: 'River-HQ',
                            description: error.message || 'Sorry! Something went wrong. Please try again!'
                        });                                            
                    }
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

             return ( 
                <Form onSubmit={this.handleSubmit} >
                    <FormItem>
                        {getFieldDecorator('usernameOrEmail', {
                            rules: [{ required: true, message: 'Please input your username or email!' }],
                        })(
                        <Input 
                            prefix={<Icon type="user" />}
                            size="large"
                            name="usernameOrEmail" 
                            placeholder="Username or Email" />    
                        )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input 
                            prefix={<Icon type="lock" />}
                            size="large"
                            name="password" 
                            type="password" 
                            placeholder="Password"  />                        
                    )}
                    </FormItem>
                    <FormItem >
                       <div className='button-container'>
                         <div className='vertical-center' >
                            <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                            <Link to="/signup">register now!</Link>
                         </div>
                     </div>
                     <Route path="/signup" component={Signup}></Route>
                    </FormItem>
                </Form>
            );
    }
}


export default Login;