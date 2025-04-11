import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ redirectPath = '/login', children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Hiển thị trạng thái loading nếu đang kiểm tra xác thực
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Đang tải...</p>
      </div>
    );
  }

  // Điều hướng đến trang đăng nhập nếu chưa xác thực
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // Hiển thị children hoặc outlet
  return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.node
};

export default ProtectedRoute;