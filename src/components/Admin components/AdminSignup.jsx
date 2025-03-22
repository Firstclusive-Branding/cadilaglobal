// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { IoMdRefresh } from "react-icons/io";
// import "../../styles/Admin Styles/AdminSignup.css";

// function AdminSignup() {
//   const navigate = useNavigate();

//   const [passwordMatch, setPasswordMatch] = useState(true);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [captchaText, setCaptchaText] = useState("");
//   const [userCaptchaInput, setUserCaptchaInput] = useState("");
//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const canvasRef = useRef(null);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     role: "manager",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });
//   // Generate random CAPTCHA text
//   const generateCaptchaText = () => {
//     const characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let result = "";
//     for (let i = 0; i < 6; i++) {
//       result += characters.charAt(
//         Math.floor(Math.random() * characters.length)
//       );
//     }
//     return result;
//   };

//   // Draw CAPTCHA on canvas
//   const drawCaptcha = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const newCaptchaText = generateCaptchaText();
//     setCaptchaText(newCaptchaText);
//     setUserCaptchaInput("");
//     setCaptchaVerified(false);

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = "#f0f0f0";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     for (let i = 0; i < 5; i++) {
//       ctx.beginPath();
//       ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
//       ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
//       ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
//         Math.random() * 255
//       }, 0.3)`;
//       ctx.stroke();
//     }

//     ctx.font = "30px Arial";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     for (let i = 0; i < newCaptchaText.length; i++) {
//       const x = 20 + i * 25;
//       const y = canvas.height / 2 + (Math.random() * 10 - 5);
//       ctx.save();
//       ctx.translate(x, y);
//       ctx.rotate((Math.random() - 0.5) * 0.4);
//       ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
//         Math.random() * 255
//       })`;
//       ctx.fillText(newCaptchaText[i], 0, 0);
//       ctx.restore();
//     }
//   };

//   useEffect(() => {
//     drawCaptcha();
//   }, []);

//   const handleCaptchaInputChange = () => {
//     if (userCaptchaInput === captchaText) {
//       setCaptchaVerified(true);
//       setErrorMessage("");
//     } else {
//       setCaptchaVerified(false);
//       setErrorMessage("CAPTCHA verification failed. Ensure the case matches.");
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "firstName" || name === "lastName") {
//       setFormData({
//         ...formData,
//         [name]: value.charAt(0).toUpperCase() + value.slice(1),
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };
//   const handleRoleChange = (e) => {
//     setFormData({
//       ...formData,
//       role: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!captchaVerified) {
//       setErrorMessage("Please verify the CAPTCHA. Ensure the case matches.");
//       return;
//     }

//     const { firstName, lastName, email, phone, password, confirmPassword } =
//       formData;
//     const allFieldsFilled =
//       firstName && lastName && email && phone && password && confirmPassword;

//     if (!allFieldsFilled) {
//       setSuccessMessage("");
//       setPasswordMatch(true);
//       setErrorMessage("Please fill in all required fields");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setPasswordMatch(false);
//       setSuccessMessage("");
//       setErrorMessage("Passwords do not match");
//       return;
//     }

//     setPasswordMatch(true);
//     setErrorMessage("");
//     setSuccessMessage("Form submitted successfully! Navigating to login...");

//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       role: "manager",
//       phone: "",
//       password: "",
//       confirmPassword: "",
//     });
//     setUserCaptchaInput("");
//     setTimeout(() => {
//       navigate("/fb");
//     }, 3000);
//   };

//   return (
//     <div className="admin-signup-wrapper">
//       <div className="admin-signup-box">
//         <h2 className="admin-signup-title">Sign Up</h2>
//         {successMessage && (
//           <div className="signup-success-message">{successMessage}</div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="signup-input-group">
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               required
//               className="signup-input-field"
//               placeholder="First Name"
//             />
//           </div>
//           <div className="signup-input-group">
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               required
//               className="signup-input-field"
//               placeholder="Last Name"
//             />
//           </div>
//           <div className="signup-input-group">
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="signup-input-field"
//               placeholder="Email"
//             />
//           </div>
//           <div className="signup-input-group">
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="signup-input-field"
//               placeholder="Phone Number"
//             />
//           </div>
//           <div className="signup-role-group">
//             <label>
//               <input
//                 type="radio"
//                 name="role"
//                 value="manager"
//                 checked={formData.role === "manager"}
//                 onChange={handleRoleChange}
//               />{" "}
//               Manager
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="role"
//                 value="recruiter"
//                 checked={formData.role === "recruiter"}
//                 onChange={handleRoleChange}
//               />{" "}
//               Recruiter
//             </label>
//           </div>

//           <div className="signup-input-group">
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="signup-input-field"
//               placeholder="Password"
//             />
//           </div>
//           <div className="signup-input-group">
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//               className="signup-input-field"
//               placeholder="Confirm Password"
//             />
//             {!passwordMatch && (
//               <span className="signup-error-text">Passwords do not match</span>
//             )}
//           </div>
//           {/* Custom CAPTCHA */}
//           <div className="admin-signup-captcha">
//             <div className="captcha-container">
//               <div>
//                 <canvas ref={canvasRef} width="155" height="50" />
//                 <button
//                   type="button"
//                   onClick={drawCaptcha}
//                   className="captcha-refresh-btn"
//                 >
//                   <IoMdRefresh size={30} />
//                 </button>
//               </div>
//               <div className="captcha-text-container">
//                 <input
//                   type="text"
//                   value={userCaptchaInput}
//                   onChange={(e) => setUserCaptchaInput(e.target.value)}
//                   placeholder="Enter CAPTCHA text"
//                   className="captcha-input"
//                   required
//                 />
//                 <button type="button" onClick={handleCaptchaInputChange}>
//                   Verify
//                 </button>
//               </div>
//             </div>
//             {errorMessage && (
//               <div className="signup-error-message">{errorMessage}</div>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="signup-submit-btn"
//             disabled={!captchaVerified}
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="admin-sign-up">
//           Already have an account?{" "}
//           <Link to="/fb" className="admin-sign-up">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AdminSignup;

import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io";
import axios from "axios";
import "../../styles/Admin Styles/AdminSignup.css";

const baseURL = "http://localhost:4000";

function AdminSignup() {
  const navigate = useNavigate();

  const [passwordMatch, setPasswordMatch] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [userCaptchaInput, setUserCaptchaInput] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const canvasRef = useRef(null);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    role: "manager",
    password: "",
    confirmPassword: "",
  });

  const generateCaptchaText = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const drawCaptcha = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const newCaptchaText = generateCaptchaText();
    setCaptchaText(newCaptchaText);
    setUserCaptchaInput("");
    setCaptchaVerified(false);

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
    for (let i = 0; i < newCaptchaText.length; i++) {
      const x = 20 + i * 25;
      const y = canvas.height / 2 + (Math.random() * 10 - 5);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((Math.random() - 0.5) * 0.4);
      ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      })`;
      ctx.fillText(newCaptchaText[i], 0, 0);
      ctx.restore();
    }
  };

  useEffect(() => {
    drawCaptcha();
  }, []);

  const handleCaptchaInputChange = () => {
    if (userCaptchaInput === captchaText) {
      setCaptchaVerified(true);
      setErrorMessage("");
    } else {
      setCaptchaVerified(false);
      setErrorMessage("CAPTCHA verification failed. Ensure the case matches.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalized =
      name === "firstname" || name === "lastname"
        ? value.charAt(0).toUpperCase() + value.slice(1)
        : value;
    setFormData({ ...formData, [name]: capitalized });
  };

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      setErrorMessage("Please verify the CAPTCHA. Ensure the case matches.");
      return;
    }

    const {
      firstname,
      lastname,
      email,
      mobile,
      role,
      password,
      confirmPassword,
    } = formData;

    const allFieldsFilled =
      firstname &&
      lastname &&
      email &&
      mobile &&
      role &&
      password &&
      confirmPassword;

    if (!allFieldsFilled) {
      setErrorMessage("Please fill in all required fields.");
      setSuccessMessage("");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      setErrorMessage("Passwords do not match.");
      setSuccessMessage("");
      return;
    }

    setPasswordMatch(true);

    try {
      const response = await axios.post(`${baseURL}/api/auth/signup`, {
        firstname,
        lastname,
        email,
        mobile,
        role,
        password,
      });

      setSuccessMessage(response.data.message || "Successfully signed up.");
      setErrorMessage("");

      // Reset form
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        role: "manager",
        password: "",
        confirmPassword: "",
      });
      setUserCaptchaInput("");
      setCaptchaVerified(false);

      // Navigate to login after delay
      setTimeout(() => {
        navigate("/fb");
      }, 3000);
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Something went wrong during sign up.";
      setErrorMessage(msg);
      setSuccessMessage("");
    }
  };

  return (
    <div className="admin-signup-wrapper">
      <div className="admin-signup-box">
        <h2 className="admin-signup-title">Sign Up</h2>
        {successMessage && (
          <div className="signup-success-message">{successMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="signup-input-group">
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="signup-input-field"
              placeholder="First Name"
            />
          </div>
          <div className="signup-input-group">
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="signup-input-field"
              placeholder="Last Name"
            />
          </div>
          <div className="signup-input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="signup-input-field"
              placeholder="Email"
            />
          </div>
          <div className="signup-input-group">
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="signup-input-field"
              placeholder="Mobile Number"
            />
          </div>

          <div className="signup-role-group">
            <label>
              <input
                type="radio"
                name="role"
                value="manager"
                checked={formData.role === "manager"}
                onChange={handleRoleChange}
              />
              Manager
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="recruiter"
                checked={formData.role === "recruiter"}
                onChange={handleRoleChange}
              />
              Recruiter
            </label>
          </div>

          <div className="signup-input-group">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="signup-input-field"
              placeholder="Password"
            />
          </div>
          <div className="signup-input-group">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="signup-input-field"
              placeholder="Confirm Password"
            />
            {!passwordMatch && (
              <span className="signup-error-text">Passwords do not match</span>
            )}
          </div>

          <div className="admin-signup-captcha">
            <div className="captcha-container">
              <div>
                <canvas ref={canvasRef} width="155" height="50" />
                <button
                  type="button"
                  onClick={drawCaptcha}
                  className="captcha-refresh-btn"
                >
                  <IoMdRefresh size={30} />
                </button>
              </div>
              <div className="captcha-text-container">
                <input
                  type="text"
                  value={userCaptchaInput}
                  onChange={(e) => setUserCaptchaInput(e.target.value)}
                  placeholder="Enter CAPTCHA text"
                  className="captcha-input"
                  required
                />
                <button type="button" onClick={handleCaptchaInputChange}>
                  Verify
                </button>
              </div>
            </div>
            {errorMessage && (
              <div className="signup-error-message">{errorMessage}</div>
            )}
          </div>

          <button
            type="submit"
            className="signup-submit-btn"
            disabled={!captchaVerified}
          >
            Sign Up
          </button>
        </form>

        <p className="admin-sign-up">
          Already have an account? <Link to="/fb">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default AdminSignup;
