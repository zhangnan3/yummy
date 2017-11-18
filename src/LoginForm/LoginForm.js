import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import styled from 'styled-components'
const FormItem = Form.Item;

const StyledButton = styled(Button)`
  width: 100%;
`

class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.onLogin(data)
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render () {
    return (
      <div className='LoginForm'>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            <Input
              onChange={this.handleUsernameChange}
              value={this.state.username}
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}  type='text' placeholder="Username" />
          </FormItem>
          <FormItem>
            <Input
              onChange={this.handlePasswordChange}
              value={this.state.password}
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type='password' placeholder="Password" />
          </FormItem>
          <FormItem>
            <StyledButton type="primary" htmlType="submit">
              登录
            </StyledButton>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default LoginForm
