import React, { Component } from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import MenuConfig from '../../config/menuConfig'
import './index.less'

const { SubMenu, Item } = Menu
export default class NavLeft extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menuTreeNode: null
    }
  }

  componentDidMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
  //渲染菜单函数
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (<SubMenu title={item.title} key={item.key}>
          {this.renderMenu(item.children)}
        </SubMenu>)
      }
      return (
        <Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Item>
      )
    })
  }

  render() {
    return (
      <div>
        <Menu>
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}
