import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usersData from "./components/BackendUsers.json"; // Import user data

const Rough = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Find user in JSON data
    const user = usersData.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Navigate based on user role
      if (user.role === "Admin") {
        navigate("/fb/admin-dashboard", { state: { role: user.role } });
      } else if (user.role === "Manager") {
        navigate("/fb/manager-dashboard", { state: { role: user.role } });
      } else if (user.role === "Recruiter") {
        navigate("/fb/recruiter-dashboard", { state: { role: user.role } });
      }
    } else {
      alert("Invalid credentials! Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Rough;
