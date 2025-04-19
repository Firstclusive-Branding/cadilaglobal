import React, { useEffect } from "react";
import "../../styles/Mainpage Styles/TermsAndCondition.css";

const TermsAndCondition = () => {
  useEffect(() => {
    document.title = `Terms and Conditions - Cadila Global`;
  }, []);

  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms and Conditions </h1>
        <p>
          Welcome to Cadila Global. By accessing or using our website and
          services, you agree to the following terms and conditions. Please read
          them carefully.
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
            with our <a href="/privacy-policy"> Privacy Policy</a>.
          </li>
          <li>
            <strong>Data Protection:</strong> We implement measures to protect
            your personal information from unauthorized access.
          </li>
        </ul>
      </div>
      <hr />
      <div className="terms-section">
        <h2>3. Terms of Service</h2>
        <p>
          The Terms of Service related to SMS communication must either be
          included in the privacy policy or be a stand-alone document. The
          information highlighted in yellow is something you need to edit and
          make that accurate to your business needs. If the information is just
          copied and pasted, it will be rejected. The document must include the
          following:
        </p>
        <ul>
          <li>
            <strong>Consent for SMS Communication:</strong> The information
            (Phone Numbers) obtained as part of the SMS consent process will not
            be shared with third parties for marketing purposes.
          </li>
          <li>
            <strong>Types of SMS Communications:</strong> If you have consented
            to receive text messages from Cadila Global, you may receive
            messages related to the following:
            <ul>
              <li>
                <strong>To Clients:</strong> Follow-up after call
              </li>
              <li>
                <strong>To Candidates:</strong> Follow-up after call
              </li>
            </ul>
          </li>
          <li>
            <strong>Message Frequency:</strong> Message frequency may vary
            depending on the type of communication. For example, you may receive
            up to 1 SMS message related to follow-up after the call.
          </li>
          <li>
            <strong>Potential Fees for SMS Messaging:</strong> Please note that
            standard message and data rates may apply, depending on your
            carrier’s pricing plan. These fees may vary if the message is sent
            domestically or internationally.
          </li>
          <li>
            <strong>Opt-In Method:</strong> You may opt-in to receive SMS
            messages from Cadila Global in the following way:
            <ul>
              <li>By submitting an online form.</li>
            </ul>
          </li>
          <li>
            <strong>Opt-Out Method:</strong> You can opt out of receiving SMS
            messages at any time. To do so, simply reply "STOP" to any SMS
            message you receive. Alternatively, you can contact us directly to
            request removal from our messaging list.
          </li>
          <li>
            <strong>Help:</strong> If you are experiencing any issues, you can
            reply with the keyword HELP. Or, you can get help directly from us
            at (832) 757-9277.
          </li>
          <li>
            <strong>Additional Options:</strong> If you do not wish to receive
            SMS messages, you can choose not to check the SMS consent box on our
            forms.
          </li>
          <li>
            <strong>Standard Messaging Disclosures:</strong>
            <ul>
              <li>Message and data rates may apply.</li>
              <li>You can opt out at any time by texting "STOP."</li>
              <li>
                For assistance, text "HELP" or visit our{" "}
                <a href="/privacy-policy">Privacy Policy</a> and{" "}
                <a href="/terms-and-conditions">Terms and Conditions</a> pages.
              </li>
              <li>Message frequency may vary.</li>
            </ul>
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
      <div className="terms-section">
        <h2>9. Contact Us</h2>
        <p>
          For questions or concerns regarding these Terms and Conditions, please
          contact:
        </p>
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
      <p className="terms-updated">
        <strong>Last Updated:</strong> 19 April 2025
      </p>
    </div>
  );
};

export default TermsAndCondition;
