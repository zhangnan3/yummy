import React, { Component } from 'react'
import styled from 'styled-components'
import {Menu, Icon } from 'antd'
import {
  withRouter
} from 'react-router-dom'

const SubMenu = Menu.SubMenu


const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Navbar = styled.div`
  flex-grow: 1;
`

const LogoutArea = styled.div`
  min-height: 50px;
  display: flex;
`

const LogoutText = styled.div`
  flex-basis: 40px;
  background-color: #ff8a00;
  text-align: center;
  color: white;
  line-height: 50px;
  cursor: pointer;
`

const Username = styled.div`
  flex-grow: 1;
  line-height: 50px;
  padding: 0 5px;
`

const LogoWrap = styled.div`
  height: 64px;
  line-height: 64px;
  padding-left: 24px;
  font-size: 1rem;
  font-weight: 700;
  background-color: #ececec;
  flex-shrink: 0;
`

class Sidebar extends Component {

  state = {
    selectedKeys: this.props.history.location.pathname
  }

  handleClick = (e) => {
    console.log(e.key)
    this.props.history.push(e.key)
    this.setState({
      selectedKeys: e.key
    })
  }

  render () {
    return (
      <SidebarWrap>
        <LogoWrap>
          吮指后台
        </LogoWrap>
        <Navbar>
         <Menu
           style={{borderRight: 'none'}}
           theme="light"
           onClick={this.handleClick}
           defaultOpenKeys={['dishes', 'orders']}
           selectedKeys={[this.state.selectedKeys]}
           mode='inline'
         >
           <SubMenu key='orders' title={<span><Icon type='file' /><span>订单管理</span></span>}>
             <Menu.Item key='/dashboard/orders'>待发货</Menu.Item>
             <Menu.Item key='/dashboard/orders/completed'>已完成</Menu.Item>
           </SubMenu>

           <SubMenu key='dishes' title={<span><Icon type='file' /><span>甜点管理</span></span>}>
             <Menu.Item key='/dashboard/dishes'>所有甜点</Menu.Item>
             <Menu.Item key='/dashboard/dishes/new'>新建甜点</Menu.Item>
           </SubMenu>
         </Menu>
        </Navbar>
        <LogoutArea>
          <LogoutText
            onClick={this.props.onLogout}
            >
            登出
          </LogoutText>
          <Username>
            admin
          </Username>
        </LogoutArea>
      </SidebarWrap>
    )
  }
}

export default withRouter(Sidebar)
