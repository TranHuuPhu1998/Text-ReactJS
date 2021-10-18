import NavLeftItems from 'data/nav-left-items';
import Logo from 'library/assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import './NavLink.modules.scss';

const nav = NavLeftItems();

const NavLinkLayout = (): JSX.Element => {
  return (
    <div className="nav">
      <img src={Logo} alt="" />
      {nav.map((nav, idx) => {
        return (
          <div key={idx} className="nav__list">
            <NavLink to={nav.to} className="nav__item">
              <div className="icon">{nav.icon && <nav.icon />}</div>
              <div className="title">{nav.title_const}</div>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinkLayout;
