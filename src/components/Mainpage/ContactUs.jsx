// import React, { useState } from "react";
// import "../../styles/Mainpage Styles/ContactUs.css";
// import { IoLocationOutline } from "react-icons/io5";
// import { BiPhoneCall } from "react-icons/bi";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";
// import contactUsImage from "../../assets/Contact Us assets/contact-us.jpg";

// const ContactUs = () => {
//   const [isChecked, setIsChecked] = useState(false);

//   const onSubmit = async (event) => {
//     event.preventDefault();

//     if (!isChecked) {
//       Swal.fire({
//         icon: "warning",
//         title: "Terms & Conditions Required",
//         text: "You must accept the terms and conditions to proceed.",
//         confirmButtonText: "OK",
//       });
//       return;
//     }

//     const formData = new FormData(event.target);

//     console.log("Sending termsaccepted:", isChecked);

//     const res = await fetch(
//       `${import.meta.env.VITE_API_URL}/api/user/contactus/create`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           firstname: formData.get("first_name"),
//           lastname: formData.get("last_name"),
//           email: formData.get("email"),
//           mobile: formData.get("phone"),
//           message: formData.get("message"),
//           termsaccepted: isChecked,
//         }),
//       }
//     );

//     if (res.ok) {
//       Swal.fire({
//         title: "Thanks for reaching out!",
//         text: "We'll connect with you soon!",
//         icon: "success",
//         confirmButtonText: "OK",
//       });
//       event.target.reset();
//       setIsChecked(false);
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
//         confirmButtonText: "Try Again",
//       });
//     }
//   };

//   return (
//     <div className="contact-us-container">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <div className="contact-us-header">
//           <img
//             src={contactUsImage}
//             alt="Contact Us"
//             className="contact-us-image"
//           />
//         </div>

//         <div className="contact-us-content">
//           <div className="contact-us-info">
//             <h2 className="contact-us-title">Contact Us</h2>
//             <h3 className="contact-us-subtitle">Let's talk with us</h3>
//             <p className="contact-us-description">
//               Questions, comments, or suggestions? Simply fill in the form and
//               we’ll be in touch shortly.
//             </p>
//             <div className="contact-us-details">
//               <a href="#" className="contact-us-location">
//                 <IoLocationOutline className="contact-us-icons" />
//                 <strong>Houston, Texas - 77469</strong>
//               </a>
//               <a href="tel:+18327579277" className="contact-us-phone">
//                 <BiPhoneCall className="contact-us-icons" /> +1 (832) 757-9277
//               </a>
//               <a
//                 href="mailto:info@cadilaglobal.com"
//                 className="contact-us-email"
//               >
//                 <MdOutlineMailOutline className="contact-us-icons" />
//                 info@cadilaglobal.com
//               </a>
//             </div>
//           </div>

//           <div className="contact-us-form">
//             <form className="contact-form" onSubmit={onSubmit}>
//               <div className="contact-form-name-group">
//                 <input
//                   type="text"
//                   className="contact-form-input"
//                   placeholder="First Name*"
//                   name="first_name"
//                   required
//                 />
//                 <input
//                   type="text"
//                   className="contact-form-input"
//                   placeholder="Last Name*"
//                   name="last_name"
//                   required
//                 />
//               </div>
//               <input
//                 type="email"
//                 className="contact-form-input"
//                 placeholder="Email*"
//                 name="email"
//                 required
//               />
//               <input
//                 type="tel"
//                 className="contact-form-input"
//                 placeholder="Phone Number*"
//                 name="phone"
//                 required
//               />
//               <textarea
//                 className="contact-form-textarea"
//                 placeholder="Your message..."
//                 name="message"
//                 required
//               ></textarea>

//               <div className="contact-form-checkbox">
//                 <input
//                   type="checkbox"
//                   id="termsCheckbox"
//                   checked={isChecked}
//                   onChange={() => setIsChecked(!isChecked)}
//                   required
//                 />
//                 <label htmlFor="termsCheckbox" className="checkbox-label">
//                   By checking this box, you agree to receive SMS messages from
//                   Cadila Global related to follow ups. You may reply STOP to
//                   opt-out at any time. Reply HELP to{" "}
//                   <a href="tel:+18327579277">+1 (832) 757-9277</a> for
//                   assistance. Messages and data rates may apply. Message
//                   frequency will vary. Learn more on our{" "}
//                   <a href="/privacy-policy">Privacy Policy</a> page and{" "}
//                   <a href="/terms-and-conditions">Terms & Conditions</a>.
//                 </label>
//               </div>

//               <button type="submit" className="contact-form-button">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import "../../styles/Mainpage Styles/ContactUs.css";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import contactUsImage from "../../assets/Contact Us assets/contact-us.jpg";

const ContactUs = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!isChecked) {
      Swal.fire({
        icon: "warning",
        title: "Terms & Conditions Required",
        text: "You must accept the terms and conditions to proceed.",
        confirmButtonText: "OK",
      });
      return;
    }

    const formData = new FormData(event.target);
    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/user/contactus/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: formData.get("first_name"),
            lastname: formData.get("last_name"),
            email: formData.get("email"),
            mobile: formData.get("phone"),
            message: formData.get("message"),
            termsaccepted: isChecked,
          }),
        }
      );

      if (res.ok) {
        Swal.fire({
          title: "Thanks for reaching out!",
          text: "We'll connect with you soon!",
          icon: "success",
          confirmButtonText: "OK",
        });
        event.target.reset();
        setIsChecked(false);
      } else {
        throw new Error("API response not OK");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-us-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="contact-us-header">
          <img
            src={contactUsImage}
            alt="Contact Us"
            className="contact-us-image"
          />
        </div>

        <div className="contact-us-content">
          <div className="contact-us-info">
            <h2 className="contact-us-title">Contact Us</h2>
            <h3 className="contact-us-subtitle">Let's talk with us</h3>
            <p className="contact-us-description">
              Questions, comments, or suggestions? Simply fill in the form and
              we’ll be in touch shortly.
            </p>
            <div className="contact-us-details">
              <a href="#" className="contact-us-location">
                <IoLocationOutline className="contact-us-icons" />
                <strong>Houston, Texas - 77469</strong>
              </a>
              <a href="tel:+18327579277" className="contact-us-phone">
                <BiPhoneCall className="contact-us-icons" /> +1 (832) 757-9277
              </a>
              <a
                href="mailto:info@cadilaglobal.com"
                className="contact-us-email"
              >
                <MdOutlineMailOutline className="contact-us-icons" />
                info@cadilaglobal.com
              </a>
            </div>
          </div>

          <div className="contact-us-form">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="contact-form-name-group">
                <input
                  type="text"
                  className="contact-form-input"
                  placeholder="First Name*"
                  name="first_name"
                  required
                  disabled={loading}
                />
                <input
                  type="text"
                  className="contact-form-input"
                  placeholder="Last Name*"
                  name="last_name"
                  required
                  disabled={loading}
                />
              </div>
              <input
                type="email"
                className="contact-form-input"
                placeholder="Email*"
                name="email"
                required
                disabled={loading}
              />
              <input
                type="tel"
                className="contact-form-input"
                placeholder="Phone Number*"
                name="phone"
                required
                disabled={loading}
              />
              <textarea
                className="contact-form-textarea"
                placeholder="Your message..."
                name="message"
                required
                disabled={loading}
              ></textarea>

              <div className="contact-form-checkbox">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  required
                  disabled={loading}
                />
                <label htmlFor="termsCheckbox" className="checkbox-label">
                  By checking this box, you agree to receive SMS messages from
                  Cadila Global related to follow ups. You may reply STOP to
                  opt-out at any time. Reply HELP to{" "}
                  <a href="tel:+18327579277">+1 (832) 757-9277</a> for
                  assistance. Messages and data rates may apply. Message
                  frequency will vary. Learn more on our{" "}
                  <a href="/privacy-policy">Privacy Policy</a> page and{" "}
                  <a href="/terms-and-conditions">Terms & Conditions</a>.
                </label>
              </div>

              <button
                type="submit"
                className="contact-form-button"
                disabled={loading}
              >
                {loading ? (
                  <span className="contact-form-spinner"></span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
