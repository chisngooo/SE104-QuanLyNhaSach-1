import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Sidebar.css';

const Sidebar = ({ menuItems }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Nhà Sách Cánh Diều" />
      </div>
      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sidebar;