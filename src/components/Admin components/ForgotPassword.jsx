import React, { useState } from "react";
import "../../styles/Admin Styles/ForgotPassword.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const baseURL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/api/auth/forgotpassword`, { email });
      toast.success("OTP sent to your email!");
      setOtpSent(true);
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Error sending OTP. Try again.";
      toast.error(msg);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/api/auth/resetpassword`, {
        email,
        tokenotp: otp,
        password: newPassword,
      });
      toast.success("Password reset successfully!");
      setTimeout(() => {
        navigate("/fb");
        setOtpSent(false);
        setEmail("");
        setOtp("");
        setNewPassword("");
      }, 3000);
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Error resetting password. Try again.";
      toast.error(msg);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2 className="forgot-password-title">Forgot Password</h2>

        <form
          onSubmit={otpSent ? handleResetPassword : handleSendOTP}
          className="forgot-password-form"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            disabled={otpSent} // optional
            onChange={(e) => setEmail(e.target.value)}
          />

          {otpSent && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter New Password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </>
          )}

          <button type="submit">
            {otpSent ? "Reset Password" : "Send OTP"}
          </button>
        </form>

        <p className="back-to-login">
          <a href="/fb">Back to Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
