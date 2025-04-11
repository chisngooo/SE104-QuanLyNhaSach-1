import axios from 'axios';

// Cấu hình axios
const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Thay đổi thành URL API thực tế của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

// Thêm interceptor để xử lý token trong header
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const authService = {
  // Hàm đăng nhập
  login: async (username, password) => {
    try {
      // Trong môi trường thực tế, bạn sẽ gọi API thực sự
      // const response = await apiClient.post('/auth/login', { username, password });
      // return response.data;
      
      // Mô phỏng API call trong môi trường phát triển
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'admin' && password === 'admin123') {
            resolve({
              token: 'fake-jwt-token-xyz',
              user: {
                id: 1,
                username: 'admin',
                displayName: 'Quản trị viên',
                role: 'admin',
              },
            });
          } else {
            reject({ message: 'Tên đăng nhập hoặc mật khẩu không chính xác' });
          }
        }, 800); // Giả lập độ trễ mạng
      });
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
      throw error.response?.data || { message: 'Đăng nhập thất bại' };
    }
  },

  // Kiểm tra token có hợp lệ không
  validateToken: async (token) => {
    try {
      // Trong môi trường thực tế, bạn sẽ gọi API thực sự
      // const response = await apiClient.post('/auth/validate-token');
      // return response.data.user;
      
      // Mô phỏng API call trong môi trường phát triển
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: 1,
            username: 'admin',
            displayName: 'Quản trị viên',
            role: 'admin',
          });
        }, 300);
      });
    } catch (error) {
      console.error('Kiểm tra token thất bại:', error);
      throw error.response?.data || { message: 'Token không hợp lệ' };
    }
  },

  // Đăng xuất (chỉ xử lý phía client, server sẽ blacklist token)
  logout: async () => {
    try {
      // Trong môi trường thực tế, bạn có thể muốn gọi API để blacklist token
      // await apiClient.post('/auth/logout');
      localStorage.removeItem('token');
      return true;
    } catch (error) {
      console.error('Đăng xuất thất bại:', error);
      throw error.response?.data || { message: 'Đăng xuất thất bại' };
    }
  },
};

export default authService;