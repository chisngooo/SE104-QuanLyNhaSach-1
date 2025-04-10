import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import Dashboard from '../pages/Dashboard';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import { useAuth } from '../contexts/AuthContext';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Route công khai */}
      <Route path="/login" element={
        isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />
      } />

      {/* Routes được bảo vệ */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Thêm các route khác cần xác thực tại đây */}
      </Route>

      {/* Điều hướng trang chủ */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Trang 404 */}
      <Route path="*" element={
        <div className="not-found">
          <h2>404 - Không tìm thấy trang</h2>
          <p>Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
          <button onClick={() => window.history.back()}>Quay lại</button>
        </div>
      } />
    </Routes>
  );
};

export default AppRoutes;