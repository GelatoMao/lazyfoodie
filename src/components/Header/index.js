import React, { Component } from 'react'
import { Input, Menu, Avatar, Divider, Button } from 'antd'
import { NavLink } from 'react-router-dom'
import { transmit } from '../../store/createActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ReadOutlined, SearchOutlined } from '@ant-design/icons'
import './index.less'

const { SubMenu, ItemGroup, Item } = Menu

class Header extends Component {

  state = {
    value: ''
  }

  // static PropTypes = {
  //   transmit: PropTypes.func.isRequired
  // }

  // 获取顶部输入框的值
  getInputValue = (e) => {
    let value = e.target.value
    this.setState({
      value
    })
  }

  render() {
    return (
      <div className="container">
        
        <div className="topbar-container">
          {/* 顶部主题 */}
          <div className="logo">
            <NavLink to="/home">
              <span>懒饭饭</span>
            </NavLink>
          </div>
          {/* 顶部搜索框 */}
          <Input
            style={{ width: '22%' }}
            placeholder="搜索菜谱、食材"
            allowClear
            size="large"
            onChange={this.getInputValue}
          />
          <NavLink to="/search">
            <Button
              type="primary"
              icon={<SearchOutlined />}
              size="large"
            >
              Search
            </Button>
          </NavLink>

          {/* 顶部导航 */}
          <div className="topbar-menu">
            <Menu mode="horizontal">
              <SubMenu
                title={<span>菜谱分类</span>}
              >
                <ItemGroup title="常用主题" />
                <ItemGroup title="常见食材" />
                <ItemGroup title="时令食材" />
              </SubMenu>
              <Item key="alipay">
                <NavLink to="/topic">话题</NavLink>
              </Item>
              <Item key="mail">
                <NavLink to="/menu">菜单</NavLink>
              </Item>
              <Item key="app">
                <NavLink to="/collections">我的主页</NavLink>
              </Item>
            </Menu>
          </div>

          {/* 顶部右侧头像 */}
          <div className="avatar">
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
              U
            </Avatar>
            {/* 分割线 */}
            <Divider type="vertical" />
            <NavLink to="/collections">
              <ReadOutlined style={{ fontSize: 25 }} />
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Header)
