import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@cadilaglobal.com" && password === "admin123") {
      localStorage.setItem("adminAuthenticated", "true");
      navigate("/fb/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2 className="admin-login-title">Admin Login</h2>
        {error && <p className="admin-login-error">{error}</p>}
        <form onSubmit={handleLogin} className="admin-form">
          <div className="admin-login-input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="admin-login-input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="admin-login-actions">
            <button type="submit" className="admin-login-btn">
              Login
            </button>
            <a href="/forgot-password" className="admin-forgot-password">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
