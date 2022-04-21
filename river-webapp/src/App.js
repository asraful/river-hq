import React, { Component } from 'react';
import './App.css';
import { Form, Icon, Input, Button, Checkbox} from "antd";

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="lContainer">
      
      <div className="lItem">
          <div className="loginForm">
            <h2>Login</h2>
              <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator("userName", {
                  rules: [{ required: true, message: "Please enter your username" }]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                    placeholder="Username"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "Please enter your Password" }]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="password"
                    placeholder="Password"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(<Checkbox>Remember me</Checkbox>)}
                

                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </FormItem>
            </Form>
          </div>
      </div>
      <div className="footer">
        <a href="#" target="_blank" rel="noopener noreferrer" className="footerLink">RiverHQ</a>
      </div>
      </div>
    );
  }
}

const App = Form.create()(NormalLoginForm);

export default App;