import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
import Footer from './components/Footer'
import './common.less';

// 页面外层结构
export default class Admin extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-content">
          <Row justify="center">
            <Col span={2}>
              <NavLeft />
            </Col>
            <Col span={12}>
              {this.props.children}
            </Col>
            <Col span={5} >
              <NavRight />
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    )
  }
}

