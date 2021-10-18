import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopBar.modules.scss';

const TopBar: React.FC = () => {
  return (
    <ul className="top-bar__list">
      <NavLink to="/home" className="top-bar__item">
        Home
      </NavLink>
      <NavLink to="/analytics-app" className="top-bar__item">
        Analytics App
      </NavLink>
      <NavLink to="/learn-defi" className="top-bar__item">
        Learn DeFi
      </NavLink>
      <NavLink to="/company" className="top-bar__item">
        Company
      </NavLink>
      <NavLink to="/staking" className="top-bar__item">
        Staking
      </NavLink>
    </ul>
  );
};

export default TopBar;
