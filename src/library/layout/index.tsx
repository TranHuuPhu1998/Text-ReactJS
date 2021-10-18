import React from 'react';
import TopBar from './components/top-bar/TopBar';
import NavLinkLayout from './components/nav-link/NavLink';
import './index.modules.scss';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="wrapper-layout">
      <div className="wrapper-layout__body-content w-100">
        <div className="body-content__nav-left w-100">
          <div className="left-wrapper">
            <NavLinkLayout />
          </div>
          <div className="wrapper-layout__top-bar w-100">
            <TopBar />
            <div className="body-content__main">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
