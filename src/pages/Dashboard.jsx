import React, { useState } from 'react';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/common/Header';
import './Dashboard.css';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('Quản lý đầu sách');

  const menuItems = [
    { path: '/books', label: 'Quản lý đầu sách' },
    { path: '/categories', label: 'Quản lý thể loại sách' },
    { path: '/publishers', label: 'Quản lý nhà xuất bản' },
    { path: '/imports', label: 'Quản lý nhập sách' },
    { path: '/suppliers', label: 'Quản lý nhà cung cấp' },
    { path: '/invoices', label: 'Quản lý hóa đơn' },
    { path: '/promotions', label: 'Quản lý khuyến mãi' },
    { path: '/reports', label: 'Báo cáo/ Thống kê' },
    { path: '/rules', label: 'Thay đổi quy định' },
    { path: '/accounts', label: 'Quản lý tài khoản' },
  ];

  const actions = [
    { label: '+ Thêm mới', className: 'btn-add', onClick: () => alert('Thêm mới') },
    { label: '🗑 Xóa', className: 'btn-delete', onClick: () => alert('Xóa') },
    { label: '❌ Bỏ chọn', className: 'btn-deselect', onClick: () => alert('Bỏ chọn') },
  ];

  return (
    <div className="dashboard">
      <Sidebar menuItems={menuItems} />
      <div className="dashboard-content">
        <Header title={currentPage} actions={actions} />
        <div className="content">
          <input type="text" placeholder="🔍 Tìm kiếm..." className="search-bar" />
          <p>Hiển thị nội dung của {currentPage}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;