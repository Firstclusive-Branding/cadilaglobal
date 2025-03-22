import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/Admin Styles/AdminLogin.css";
import { IoMdRefresh } from "react-icons/io";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [userCaptchaInput, setUserCaptchaInput] = useState("");
  const canvasRef = useRef(null);
  const baseURL = "http://localhost:4000";
  const generateCaptchaText = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
  };

  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.3)`;
      ctx.stroke();
    }

    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let i = 0; i < text.length; i++) {
      const x = 20 + i * 25;
      const y = canvas.height / 2 + (Math.random() * 10 - 5);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((Math.random() - 0.5) * 0.4);
      ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }
  };

  const refreshCaptcha = () => {
    const newText = generateCaptchaText();
    setCaptchaText(newText);
    drawCaptcha(newText);
    setUserCaptchaInput("");
    setError("");
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Optional CAPTCHA check
    // if (userCaptchaInput !== captchaText) {
    //   setError("CAPTCHA verification failed. Ensure the case matches.");
    //   return;
    // }

    try {
      const response = await axios.post(`${baseURL}/api/auth/signin`, {
        email,
        password,
      });

      const { encoded_token, public_token } = response.data.data;

      // Decode the public token or use backend response to get role/email if needed
      const base64Payload = public_token.split(".")[1];
      const payload = JSON.parse(atob(base64Payload));
      const { email: userEmail, role } = payload;

      localStorage.setItem("userRole", role);
      localStorage.setItem(
        "userData",
        JSON.stringify({ email: userEmail, role })
      );
      localStorage.setItem("token", encoded_token);

      // Role-based navigation
      switch (role) {
        case "Admin":
          localStorage.setItem("adminAuthenticated", "true");
          navigate("/fb/admin-dashboard");
          break;
        case "manager":
          localStorage.setItem("managerAuthenticated", "true");
          navigate("/fb/manager-dashboard");
          break;
        case "recruiter":
          localStorage.setItem("recruiterAuthenticated", "true");
          navigate("/fb/recruiter-dashboard");
          break;
        case "user":
          localStorage.setItem("userAuthenticated", "true");
          navigate("/");
          break;
        default:
          setError("Invalid user role");
      }
      window.location.reload();
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Something went wrong. Try again.";
      setError(msg);
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2 className="admin-login-title">Login</h2>
        <form onSubmit={handleLogin} className="admin-form">
          <div className="admin-login-input-group">
            <input
              type="email"
              value={email}
              // value="admin@cadilaglobal.com"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="admin-login-input-group">
            <input
              type="password"
              // value="1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <div className="admin-login-captcha">
            <div className="captcha-container">
              <div>
                <canvas ref={canvasRef} width="155" height="50" />
                <button
                  type="button"
                  onClick={refreshCaptcha}
                  className="captcha-refresh-btn"
                >
                  <IoMdRefresh size={30} />
                </button>
              </div>
              {/* <input
                type="text"
                value={userCaptchaInput}
                onChange={(e) => setUserCaptchaInput(e.target.value)}
                placeholder="Enter CAPTCHA text"
                className="captcha-input"
                required
              /> */}
            </div>
          </div>

          {error && <p className="admin-login-error">{error}</p>}

          <div className="admin-login-actions">
            <button type="submit" className="admin-login-btn">
              Login
            </button>
            <p className="admin-sign-up">
              Don't have an account? <Link to="sign-up">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
