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

class Dishes extends Component {

  state = {
    dishes:[]
  }

  componentDidMount () {
    axios.get(`http://localhost:3000/dishes`).then(
      res => {
        console.log(res)
        this.setState({
          dishes: res.data
        })
      }
    )
  }

  delete = (e, id) => {
    e.preventDefault()
    console.log(id)
    axios.delete(`http://localhost:3000/dishes/${id}`).then(
      res => {
        message.info('删除成功！')
        this.setState({
          dishes: this.state.dishes.filter(t => t.id !== id)
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
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',
      },
      {
        title: '操作',
        dataIndex: 'id',
        key: 'id',
        render: (id) => (
          <Link to='' onClick={(e) => this.delete(e, id)}>删除</Link>
        )
      }
    ]
    const { dishes } = this.state
    return (
      <div className='dishes'>
        <Table rowKey={record => record.id}
          dataSource={dishes} columns={columns} />
      </div>
    )
  }
}

export default Dishes
