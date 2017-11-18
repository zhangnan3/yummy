import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar'
import Dishes from '../Dishes/Dishes'
import Orders from '../Orders/Orders'
import NewDish from '../NewDish/NewDish'
import CompletedOrders from '../CompletedOrders/CompletedOrders'
import NotFound from '../NotFound/NotFound'
import {
  withRouter,
  Route,
  Switch
} from 'react-router-dom'

const DashBoardWrap = styled.div`
  display: flex;
  height: 100vh;
`

const TopHeader = styled.div`
  height: 64px;
  background-color: #404040;
  color: #fff;
  width: 100%;
  padding-left: 72px;
  line-height: 64px;
  flex-shrink: 0;
  position: fixed;
  z-index: 999;
`

const SideWrap = styled.div`
  width: 150px;
`

const MainWrap = styled.div`
  flex-grow: 1;
`

const MainContent = styled.div`
  margin: 88px 24px 24px;
  flex-grow: 1;
`

class DashBoard extends Component {
  logout = () => {
    window.localStorage.removeItem('userId')
    this.props.history.push('/')
  }

  render () {
    return (
      <DashBoardWrap>
        <SideWrap>
          <Sidebar onLogout={this.logout}/>
        </SideWrap>
        <MainWrap>
          <TopHeader />
          <MainContent>
            <Switch>
              <Route path='/dashboard/dishes/new' component={NewDish} />
              <Route path='/dashboard/dishes' component={Dishes} />
              <Route path='/dashboard/orders/completed' component={CompletedOrders} />
              <Route path='/dashboard/orders' component={Orders} />
              <Route component={NotFound} />
            </Switch>
          </MainContent>
        </MainWrap>
      </DashBoardWrap>
    )
  }
}

export default withRouter(DashBoard)
