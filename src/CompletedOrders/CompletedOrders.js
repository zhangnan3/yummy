import React, { Component } from 'react'
import { Table } from 'antd'
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
          orders: res.data.filter(t => t.completed !== false)
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
      }
    ]
    const { orders } = this.state
    return (
      <div className='completed-orders'>
        <Table rowKey={record => record.id}
          dataSource={orders} columns={columns} />
      </div>
    )
  }
}

export default Orders
