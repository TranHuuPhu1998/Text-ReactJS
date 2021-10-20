import React from 'react';
import { Row, Col } from 'antd';
import TopBar from './components/top-bar/TopBar';
import NavLinkLayout from './components/nav-link/NavLink';
import './index.modules.scss';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <Row className="wrapper-layout">
      <Row className="wrapper-layout__body-content w-100">
        <Row className="body-content__nav-left w-100">
          <Col className="left-wrapper">
            <NavLinkLayout />
          </Col>
          <Col className="wrapper-layout__top-bar w-100">
            <TopBar />
            <Row className="body-content__main">{children}</Row>
          </Col>
        </Row>
      </Row>
    </Row>
  );
};

export default Layout;
