import React from "react";
import "../styles/TermsAndCondition.css";

const TermsAndCondition = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms and Conditions for Cadila Global Staffing Agency</h1>
        <p>
          Welcome to Cadila Global Staffing Agency. By accessing or using our
          website and services, you agree to the following terms and conditions.
          Please read them carefully.
        </p>
      </div>
      <hr />
      <div className="terms-section">
        <h2>1. General Terms</h2>
        <ul>
          <li>
            <strong>Services Provided:</strong> Cadila Global offers staffing
            and recruitment services to businesses and job seekers.
          </li>
          <li>
            <strong>Accuracy of Information:</strong> Users must ensure that all
            information provided is accurate and truthful.
          </li>
          <li>
            <strong>Modifications:</strong> We reserve the right to modify these
            terms at any time, with changes taking effect immediately upon
            posting.
          </li>
        </ul>
      </div>
      <hr />
      <div className="terms-section">
        <h2>2. Privacy Policy</h2>
        <ul>
          <li>
            <strong>Data Collection:</strong> We collect personal information
            necessary for providing our services.
          </li>
          <li>
            <strong>Data Usage:</strong> Collected data is used in accordance
            with our [Privacy Policy].
          </li>
          <li>
            <strong>Data Protection:</strong> We implement measures to protect
            your personal information from unauthorized access.
          </li>
        </ul>
      </div>
      <hr />
      <div className="terms-section">
        <h2>3. Consent for SMS Communication</h2>
        <ul>
          <li>
            <strong>Agreement:</strong> By providing your mobile number, you
            consent to receive SMS communications from Cadila Global related to
            our services.
          </li>
          <li>
            <strong>Third-Party Sharing:</strong> Information obtained through
            SMS consent will not be shared with third parties, except as
            required by law.
          </li>
          <li>
            <strong>Opt-Out:</strong> You may opt out of SMS communications at
            any time by following the instructions in the messages or contacting
            us directly.
          </li>
        </ul>
      </div>
      <hr />
      <div className="terms-section">
        <h2>4. Types of SMS Communications</h2>
        <ul>
          <li>
            <strong>Customers and Guests:</strong> Updates about orders,
            deliveries, or other relevant service-related information.
          </li>
          <li>
            <strong>Job Applicants:</strong> Information regarding application
            status, onboarding materials, or other employment-related updates.
          </li>
        </ul>
      </div>
      <hr />
      <div className="terms-section">
        <h2>5. Regulatory Compliance</h2>
        <ul>
          <li>
            <strong>Licensing:</strong> Cadila Global operates in compliance
            with all applicable licensing requirements in Texas.
          </li>
          <li>
            <strong>Employment Classification:</strong> We classify our workers
            in accordance with federal and state laws to ensure proper wages,
            benefits, and protections.
          </li>
          <li>
            <strong>Non-Discrimination:</strong> We adhere to non-discrimination
            policies, ensuring equal opportunity for all candidates and
            employees.
          </li>
        </ul>
      </div>
      <hr />
      <div className="terms-section">
        <h2>6. Client Responsibilities</h2>
        <ul>
          <li>
            <strong>Job Descriptions:</strong> Clients must provide accurate job
            descriptions, qualifications, and requirements for positions to be
            filled.
          </li>
          <li>
            <strong>Work Environment:</strong> Clients are responsible for
            maintaining a safe and compliant work environment for assigned
            employees.
          </li>
        </ul>
      </div>
      <hr />
      <div className="terms-section">
        <h2>7. Limitation of Liability</h2>
        <ul>
          <li>
            <strong>Service Interruptions:</strong> Cadila Global is not liable
            for any damages resulting from service interruptions, technical
            issues, or unforeseen events.
          </li>
          <li>
            <strong>Employment Decisions:</strong> We are not responsible for
            employment decisions made by clients or candidates.
          </li>
        </ul>
      </div>
      <hr />
      <div className="terms-section">
        <h2>8. Governing Law</h2>
        <p>
          These terms are governed by the laws of the State of Texas. Any
          disputes arising shall be resolved in the courts of Texas.
        </p>
      </div>
      <hr />
      <div className="terms-contact">
        <h2>9. Contact Us</h2>
        <p>
          For questions or concerns regarding these Terms and Conditions, please
          contact:
        </p>
        <p>
          Cadila Global Staffing Agency
          <br />
          Email:{" "}
          <a href="mailto:info@cadilaglobal.com">info@cadilaglobal.com</a>
          <br />
          Phone: <a href="tel:+18327579277">+1 (832) 757-9277</a>
        </p>
      </div>
      <hr />
      <p className="terms-updated">
        <strong>Last Updated:</strong> 12 March 2025
      </p>
    </div>
  );
};

export default TermsAndCondition;
