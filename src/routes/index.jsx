import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import Dashboard from '../pages/Dashboard';
import { useAuth } from '../contexts/AuthContext';

const AppRoutes = () => {
  const { user, loading } = useAuth();

  // Hiển thị loading nếu đang kiểm tra xác thực
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Đang tải...</p>
      </div>
    );
  }

  return (
    <Routes>
      {/* Route công khai - không cần xác thực */}
      <Route path="/login" element={
        user ? <Navigate to="/books" replace /> : <LoginPage />
      } />

      {/* Routes cần xác thực */}
      <Route path="/" element={
        !user ? <Navigate to="/login" replace /> : <Dashboard />
      } />
      
      <Route path="/books" element={
        !user ? <Navigate to="/login" replace /> : <Dashboard />
      } />
      
      <Route path="/categories" element={
        !user ? <Navigate to="/login" replace /> : <Dashboard />
      } />
      
      <Route path="/publishers" element={
        !user ? <Navigate to="/login" replace /> : <Dashboard />
      } />
      
      <Route path="/imports" element={
        !user ? <Navigate to="/login" replace /> : <Dashboard />
      } />
      
      <Route path="/suppliers" element={
        !user ? <Navigate to="/login" replace /> : <Dashboard />
      } />
      
      <Route path="/invoices" element={
        !user ? <Navigate to="/login" replace /> : <Dashboard />
      } />
      
      <Route path="/promotions" element={
        !user ? <Navigate to="/login" replace /> : <Dashboard />
      } />
      
      <Route path="/reports" element={
        !user ? <Navigate to="/login" replace /> : <Dashboard />
      } />
      
      <Route path="/rules" element={
        !user ? <Navigate to="/login" replace /> : <Dashboard />
      } />
      
      <Route path="/accounts" element={
        !user ? <Navigate to="/login" replace /> : <Dashboard />
      } />

      {/* Fallback - nếu không khớp route nào */}
      <Route path="*" element={
        !user ? <Navigate to="/login" replace /> : <Navigate to="/books" replace />
      } />
    </Routes>
  );
};

export default AppRoutes;