import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import Settings from '../settings.default.js'
import { message } from 'antd'

import styled from 'styled-components'

const HomeWrap = styled.div`
  height: 100vh;
  padding-top: 80px;
`;

const FormWrap = styled.div`
  padding: 40px 10px 10px;
  max-width: 350px;
  margin: 0 auto;
`

class Home extends Component {

  login = (data) => {
    console.log(data)
    if (data.password !== Settings.user.password || data.username !== Settings.user.username)
    {
      return message.error('用户名密码错误')
    }
    window.localStorage.setItem('userId', Settings.user.userId)
    this.props.history.push('/dashboard/dishes')
  }

  render () {
    return (
      <HomeWrap>
        <FormWrap>
          <LoginForm onLogin={this.login}/>
        </FormWrap>
      </HomeWrap>
    )
  }
}

export default Home
