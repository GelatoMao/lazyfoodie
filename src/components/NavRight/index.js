import React, { Component } from 'react'
import { Tag } from 'antd'
import { NavLink } from 'react-router-dom'
import Axios from '../../api'
import Utils from '../../utils'
import './index.less'

export default class NavRight extends Component {

  state = {
    tagList: []
  }

  componentDidMount() {
    this.getTagAPIList()
  }

  // 渲染标签列表数据
  renderTagList = (data) => {
    return data.map((item, index) => {
      return (
        <li className="tags-content" key={index}>
          <h4>{item.name}</h4>
          <div>
            {Utils.getRandomArrayElements(item.list, 8).map((tag, index) => (
              <Tag color="magenta" key={index}>{tag.name}</Tag>
            ))}
          </div>
        </li>
      )
    })
  }

  //从接口获取标签列表数据 并更新给state中的tagList
  getTagAPIList = () => {
    Axios
      .jsonp({
        url: 'http://api.jisuapi.com/recipe/class?appkey=fe17358d5163c8bd'
      })
      .then((res) => {
        if (res.status === 0) {
          let tagList = this.renderTagList(res.result)
          this.setState({
            tagList: tagList
          })
        }
      })
  }

  render() {
    return (
      <div className="aside">
        {/* 右侧标题部分 */}
        <div className="title">
          <span className="hot-tag">热门标签</span>
          <span className="link-more">
            <NavLink to="/tags">更多...</NavLink>
          </span>
        </div>
        {/* 右侧列表部分 */}
        <ul className="tags">
          {this.state.tagList}
        </ul>
      </div>
    )
  }
}
