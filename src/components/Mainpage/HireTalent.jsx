// import React from "react";
// import "../../styles/Mainpage Styles/HireTalent.css";
// import Hiretalent from "../../assets/hire talent assets/hire-talent.jpg";
// import { motion } from "framer-motion";
// import Swal from "sweetalert2";

// const HireTalent = () => {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
<<<<<<< HEAD

//     const res = await fetch(
//       `${import.meta.env.VITE_API_URL}/api/user/talent/create`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           companyname: formData.get("Company_Name"),
//           email: formData.get("Email"),
//           jobrole: formData.get("Job_Role"),
//           jobdescription: formData.get("Rquirements"),
//           mobile: formData.get("Contact_Number"),
//         }),
//       }
//     );

//     if (res.ok) {
=======
//     formData.append("access_key", "2a53a327-68d0-450d-92b3-0d4ce175b269");

//     formData.append(
//       "subject",
//       "Hire Talent Form Submission from CadilaGlobal.com"
//     );

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: json,
//     }).then((res) => res.json());

//     if (res.success) {
>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
//       Swal.fire({
//         title: "Thanks for reaching out!",
//         text: "We'll connect with you soon!",
//         icon: "success",
//         confirmButtonText: "OK",
//       });
//       event.target.reset();
//     } else {
<<<<<<< HEAD
=======
//       console.error("Web3Forms Error:", res);
>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
//         confirmButtonText: "Try Again",
//       });
//     }
//   };
<<<<<<< HEAD

=======
>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
//   return (
//     <div className="hire-talent-container">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         <img src={Hiretalent} alt="Hire Talent" className="hire-talent-image" />
//         <div className="hire-talent-content">
//           <div className="hire-talent-left">
//             <h3 className="hire-talent-subtitle">Find the Right Candidates</h3>
//             <h1 className="hire-talent-title">Hire Top Talent</h1>
//             <p className="hire-talent-description">
//               Submit your hiring requirements, and we will connect you with
//               qualified candidates that match your needs.
//             </p>
//           </div>
//           <div className="hire-talent-right">
//             <form className="hire-talent-form" onSubmit={onSubmit}>
//               <input
//                 type="text"
//                 placeholder="Enter company name"
//                 name="Company_Name"
//                 required
//               />

//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 name="Email"
//                 required
//               />

//               <input
//                 type="text"
//                 placeholder="Enter job role"
//                 name="Job_Role"
//                 required
//               />

//               <textarea
//                 placeholder="Describe job requirements"
//                 name="Rquirements"
//                 required
//               ></textarea>

//               <input
//                 type="tel"
//                 placeholder="Enter contact number"
//                 name="Contact_Number"
//                 required
//               />

//               <button type="submit">Submit Requirement</button>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default HireTalent;

<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
import "../../styles/Mainpage Styles/HireTalent.css";
import Hiretalent from "../../assets/hire talent assets/hire-talent.jpg";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const HireTalent = () => {
<<<<<<< HEAD
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

    setLoading(true);

=======
  const onSubmit = async (event) => {
    event.preventDefault();
>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
    const formData = new FormData(event.target);

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/talent/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyname: formData.get("Company_Name"),
          email: formData.get("Email"),
          jobrole: formData.get("Job_Role"),
          jobdescription: formData.get("Rquirements"),
          mobile: formData.get("Contact_Number"),
<<<<<<< HEAD
          termsaccepted: isChecked,
=======
>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
        }),
      }
    );

<<<<<<< HEAD
    setLoading(false);

=======
>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
    if (res.ok) {
      Swal.fire({
        title: "Thanks for reaching out!",
        text: "We'll connect with you soon!",
        icon: "success",
        confirmButtonText: "OK",
      });
      event.target.reset();
<<<<<<< HEAD
      setIsChecked(false);
=======
>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="hire-talent-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={Hiretalent} alt="Hire Talent" className="hire-talent-image" />
        <div className="hire-talent-content">
          <div className="hire-talent-left">
            <h3 className="hire-talent-subtitle">Find the Right Candidates</h3>
            <h1 className="hire-talent-title">Hire Top Talent</h1>
            <p className="hire-talent-description">
              Submit your hiring requirements, and we will connect you with
              qualified candidates that match your needs.
            </p>
          </div>
          <div className="hire-talent-right">
            <form className="hire-talent-form" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Enter company name"
                name="Company_Name"
                required
<<<<<<< HEAD
                disabled={loading}
              />
=======
              />

>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
              <input
                type="email"
                placeholder="Enter your email"
                name="Email"
                required
<<<<<<< HEAD
                disabled={loading}
              />
=======
              />

>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
              <input
                type="text"
                placeholder="Enter job role"
                name="Job_Role"
                required
<<<<<<< HEAD
                disabled={loading}
              />
=======
              />

>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
              <textarea
                placeholder="Describe job requirements"
                name="Rquirements"
                required
<<<<<<< HEAD
                disabled={loading}
              ></textarea>
=======
              ></textarea>

>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
              <input
                type="tel"
                placeholder="Enter contact number"
                name="Contact_Number"
                required
<<<<<<< HEAD
                disabled={loading}
              />

              <div className="hire-talent-checkbox">
                <input
                  type="checkbox"
                  id="hireTermsCheckbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  disabled={loading}
                  required
                />
                <label
                  htmlFor="hireTermsCheckbox"
                  className="hire-talent-checkbox-label"
                >
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

              <button type="submit" disabled={loading}>
                {loading ? (
                  <span className="spinner"></span>
                ) : (
                  "Submit Requirement"
                )}
              </button>
=======
              />

              <button type="submit">Submit Requirement</button>
>>>>>>> 591cd4e84ce226b18e1c89eaf91f3f0f8281833f
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HireTalent;
