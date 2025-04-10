import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Nhà sách Cánh Diều</h1>
          <div className="user-info">
            <span>Xin chào, {user?.displayName || user?.username || 'Người dùng'}</span>
            <button className="logout-button" onClick={handleLogout}>Đăng xuất</button>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="welcome-section">
          <h2>Chào mừng đến với Hệ thống Quản lý Nhà sách</h2>
          <p>Đây là trang quản lý chính của hệ thống. Từ đây, bạn có thể truy cập các chức năng quản lý khác nhau.</p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Quản lý Sách</h3>
            <p>Thêm, sửa, xóa sách và xem thông tin chi tiết về sách</p>
          </div>
          <div className="feature-card">
            <h3>Quản lý Nhân viên</h3>
            <p>Quản lý thông tin nhân viên và phân quyền</p>
          </div>
          <div className="feature-card">
            <h3>Quản lý Hóa đơn</h3>
            <p>Xem và kiểm soát các hóa đơn bán hàng</p>
          </div>
          <div className="feature-card">
            <h3>Báo cáo & Thống kê</h3>
            <p>Xem báo cáo doanh thu và các số liệu thống kê</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;