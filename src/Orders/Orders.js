import React, { Component } from 'react'
import { Table, message } from 'antd'
import {
  Link
} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Poster = styled.img`
  width: 30px;
`

class Orders extends Component {

  state = {
    orders:[]
  }

  componentDidMount () {
    axios.get(`http://localhost:3000/orders`).then(
      res => {
        console.log(res)
        this.setState({
          orders: res.data
        })
      }
    )
  }

  sendGood = (e, id) => {
    e.preventDefault()
    const { orders } = this.state
    console.log(orders, id)
    const data = {
      ...orders.find(t => t.id === id),
      completed: true
    }
    axios.put(`http://localhost:3000/orders/${id}`, data).then(
      res => {
        message.info('发货成功！')

        this.setState({
          orders: this.state.orders.map(t => {
            if (t.id === id) {
              return { ...t, completed: true }
            }
            return t
          })
        })
      }
    )
  }

  render () {
    const columns = [
      {
        title: '海报',
        dataIndex: 'poster',
        key: 'poster',
        render: (text) =>
          <Poster src={text} alt='poster' />
      },
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price'
      },
      {
        title: '操作',
        dataIndex: 'id',
        key: 'id',
        render: (id) => (
          <Link to='' onClick={(e) => this.sendGood(e, id)}>发货</Link>
        )
      }
    ]
    const { orders } = this.state
    const newOrders = orders.filter(t => t.completed === false)
    return (
      <div className='orders'>
        <Table rowKey={record => record.id}
          dataSource={newOrders} columns={columns} />
      </div>
    )
  }
}

export default Orders
