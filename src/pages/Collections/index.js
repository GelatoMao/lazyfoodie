import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Card, Tabs, Avatar, Statistic} from 'antd';
import { LikeFilled, StarFilled } from '@ant-design/icons'
import './index.less'

const { TabPane } = Tabs
const { Meta } = Card;

export default class Collections extends Component {

  state = {
    menuList: []
  }

  componentDidMount() {
    this.getCollectionList()
  }

  renderMenuList = (item) => {
    return (
      <NavLink
        key={item.id}
        to={{
          pathname: `/common/detail/${item.id}`,
          state: item
        }}
      >
        <Card
          hoverable
          className="card"
          cover={<img alt="example" src={item.pic} />}
          id={item.id}
        >
          <Meta
            title={item.name}
            description={item.tag}
          />
        </Card>
      </NavLink>
    );
  }

  getCollectionList = () => {
    let len = localStorage.length
    if (len > 0) {
      let menuList = []
      for (let i = 0; i < len; i++) {
        const menuName = localStorage.key(i)
        console.log(menuName)

        let menu = JSON.parse(localStorage.getItem(menuName))
        console.log(typeof menu)
        menuList.push(this.renderMenuList(menu))
      }
      this.setState({
        menuList
      })
    }
  }
  render() {
    return (
      <div className="wrap">
        <div className="user-header">
          <Avatar
            className="avatar"
            style={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
              width: 100,
              height: 100
            }}
          >
            U
          </Avatar>
          <div className="info">
            <span className="user-title">鹿笑猫的厨房</span>
            <div className="statistic">
              <Statistic
                className="statistic-item"
                title="我的点赞"
                value={101}
              />
              <Statistic
                className="statistic-item"
                title="我的关注"
                value={11}
              />
            </div>
          </div>
        </div>

        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <StarFilled />
                我的收藏
              </span>
            }
            key="1"
          >
            <div className="collection-content">
              {this.state.menuList}
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <LikeFilled />
                我的点赞
              </span>
            }
            key="2"
          />
        </Tabs>
      </div>
    )
  }
}
