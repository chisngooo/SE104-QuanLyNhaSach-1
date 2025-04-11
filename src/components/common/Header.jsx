import React from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

const Header = ({ title, actions }) => {
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <div className="header-right">
        <div className="header-actions">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`header-action ${action.className}`}
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
        <div className="user-logout">
          <span className="username">{user?.displayName || user?.username || 'Admin'}</span>
          <button className="logout-btn" onClick={handleLogout}>
            <span className="logout-icon">⏏</span>
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      className: PropTypes.string,
      onClick: PropTypes.func,
    })
  ).isRequired,
};

export default Header;