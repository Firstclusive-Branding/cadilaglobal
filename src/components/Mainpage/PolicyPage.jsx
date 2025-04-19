import React, { useEffect } from "react";
import "../../styles/Mainpage Styles/PolicyPage.css";

const PolicyPage = () => {
  useEffect(() => {
    document.title = `Privacy Policy - Cadila Global`;
  }, []);
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy for Cadila Global</h1>
        <p>
          At Cadila Global, protecting your privacy is our priority. This
          Privacy Policy explains how we collect, use, disclose, and protect
          your information when you use our website and services.
        </p>
      </div>
      <hr />
      <div className="privacy-section">
        <h2>1. Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            address, and government-issued IDs (if applicable).
          </li>
          <li>
            <strong>Employment Information:</strong> Resumes, work history,
            education, certifications, and job preferences.
          </li>
          <li>
            <strong>Technical Information:</strong> IP address, browser type,
            operating system, and usage data (collected via cookies).
          </li>
          <li>
            <strong>SMS Consent Information:</strong> Mobile numbers and consent
            for communication.
          </li>
        </ul>
      </div>
      <hr />
      <div className="privacy-section">
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>
            Staffing Services: Matching candidates with job opportunities.
          </li>
          <li>Customer Support: Addressing inquiries and providing support.</li>
          <li>
            Notifications: Sending job updates and employment-related messages.
          </li>
          <li>Compliance: Ensuring adherence to legal regulations.</li>
        </ul>
      </div>
      <hr />
      <div className="privacy-section">
        <h2>3. Consent for SMS Communications</h2>
        <p>
          Phone numbers collected with SMS consent, will not be sold, rented, or
          shared with third parties or affiliates for marketing purposes under
          any circumstances.
        </p>
      </div>
      <hr />
      <div className="privacy-section">
        <h2>4. Data Sharing and Disclosure</h2>
        <ul>
          <li>We do not sell or rent your personal information.</li>
          <li>
            Information is shared only with trusted service providers and legal
            authorities when necessary.
          </li>
        </ul>
      </div>
      <hr />
      <div className="privacy-section">
        <h2>5. Data Retention and Security</h2>
        <ul>
          <li>Your data is retained only as long as necessary.</li>
          <li>We implement industry-standard security measures.</li>
        </ul>
      </div>
      <hr />
      <div className="privacy-section">
        <h2>6. Your Rights</h2>
        <ul>
          <li>Access: Request a copy of your data.</li>
          <li>Correction: Update incorrect information.</li>
          <li>
            Deletion: Request data removal (subject to legal obligations).
          </li>
        </ul>
      </div>
      <hr />
      <div className="privacy-section">
        <h2>7. Cookies and Tracking</h2>
        <p>
          Our website uses cookies to enhance user experience and analyze
          website performance. You can control cookies through browser settings.
        </p>
      </div>
      <hr />
      <div className="privacy-section">
        <h2>8. Children's Privacy</h2>
        <p>
          Our services are not directed to individuals under 18. We do not
          knowingly collect data from minors.
        </p>
      </div>
      <hr />
      <div className="privacy-section">
        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page.
        </p>
      </div>
      <hr />
      <div className="privacy-section">
        <h2>10. Standard Messaging Disclosures</h2>
        <ul>
          <li>Message and data rates may apply.</li>
          <li>You can opt out at any time by texting ‘STOP’.</li>
          <li>
            For assistance, text ‘HELP’ or visit our Privacy Policy and Terms
            and Conditions pages.
          </li>
          <li>Message frequency may vary.</li>
        </ul>
      </div>
      <hr />
      <div className="privacy-section">
        <h2>11. Contact Us</h2>
        <p>For any privacy concerns, contact:</p>
        <p>
          Cadila Global
          <br />
          Email:{" "}
          <a href="mailto:info@cadilaglobal.com">info@cadilaglobal.com</a>
          <br />
          Phone: <a href="tel:+18327579277">+1 (832) 757-9277</a>
        </p>
      </div>
      <hr />
      <p className="privacy-updated">
        <strong>Last Updated:</strong> 19 April 2025
      </p>
    </div>
  );
};

export default PolicyPage;
