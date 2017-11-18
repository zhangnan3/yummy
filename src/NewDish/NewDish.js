import React, { Component } from 'react'
import { Form, Button, Icon, Input, message } from 'antd'
import styled from 'styled-components'
import axios from 'axios'


const NewDishWrap = styled.div`
  max-width: 900px;
`

class NewDish extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let data = this.props.form.getFieldsValue()
    console.log(data)
    let unFilled = Object.keys(data).filter(
      prop => {
         return (!data[prop])
      }
    )
    if(unFilled.length === 0 ) {
      const allData = { ...data,
        poster: 'https://avatars3.githubusercontent.com/u/72467?v=4&s=460'
      }
      axios.post(`http://localhost:3000/dishes`, allData).then(
        res => {
          console.log(res.data)
          this.props.history.push('/dashboard/dishes')
        
        }
      )
    } else {
      message.error("请填入全部信息")
    }
  }

  hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  render () {
    const { getFieldDecorator, getFieldsError } = this.props.form
    const config = {
      rules: [{ type: 'string', required: true, message: '必填项目' }],
    }
    return (
      <NewDishWrap>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('name', config)(
            <Input prefix={<Icon type='user' style={{ fontSize: 14 }} />}
            placeholder='名称'
            type='text'
            name='name' />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('desc', config)(
            <Input prefix={<Icon type='lock' style={{ fontSize: 14 }} />}
            placeholder='描述'/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('price', config)(
            <Input prefix={<Icon type="pay-circle-o" style={{ fontSize: 14 }} />}
            placeholder='价格' />
            )}
          </Form.Item>
          <Form.Item>
            <Button disabled={this.hasErrors(getFieldsError())}
              type='primary' htmlType='submit'>
              添加
            </Button>
          </Form.Item>
        </Form>
      </NewDishWrap>
    )
  }
}

export default Form.create({})(NewDish)
