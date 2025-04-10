import "./App.css";
import logo from "../src/assets/img/logo.svg";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function InputLogin({ type, id, label, name, placeholder, required }) {
  const [currentType, setCurrentType] = useState(type);

  const togglePasswordVisibility = () => {
    if (type === "password") {
      setCurrentType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    }
  };

  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <div className="input-wrapper">
        <input
          type={currentType}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
        />
        {type === "password" && (
          <FontAwesomeIcon
            icon={currentType === "password" ? faEyeSlash : faEye}
            className="eye-icon"
            onClick={togglePasswordVisibility}
            role="button"
            aria-label={
              currentType === "password" ? "Hiện mật khẩu" : "Ẩn mật khẩu"
            }
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ")
                togglePasswordVisibility();
            }}
          />
        )}
      </div>
    </div>
  );
}

function Login() {
  return (
    <>
      <header className="header-login">
        <div className="logo-container">
          <img src={logo} alt="Nhà sách Cánh Diều" className="logo-login" />
        </div>
      </header>

      <main className="main-content">
        <div className="login-card">
          <h1>Đăng nhập</h1>
          <InputLogin
            type="text"
            id="username"
            label="Tên đăng nhập"
            name="username"
            placeholder="Nhập tên đăng nhập"
            required
          />
          <InputLogin
            type="password"
            id="password"
            label="Mật khẩu"
            name="password"
            placeholder="Mật khẩu"
            required
          />

          <button type="submit" className="login-button">
            Đăng nhập
          </button>
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
