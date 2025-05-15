import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Mainpage Styles/PolicyPage.css";

const PrivacyPage = () => {
  const [policyData, setPolicyData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    document.title = "Privacy Policy - Cadila Global LLC";

    const fetchPolicy = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user/privacypolicy`
        );
        const policies = res.data?.data?.[0]?.privacypolicy || [];
        const updatedAt = res.data?.data?.[0]?.updatedAt || "";

        setPolicyData(policies);
        if (updatedAt) {
          setLastUpdated(
            new Date(updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          );
        }
      } catch (error) {
        console.error("Failed to fetch privacy policy", error);
      }
    };

    fetchPolicy();
  }, []);

  const formatTitle = (str) =>
    str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const formatSection = (str) =>
    str
      .replace(/^\d+\./, "") // remove leading number and dot
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy for Cadila Global LLC</h1>
        <p>
          At Cadila Global LLC, protecting your privacy is our priority. This
          Privacy Policy explains how we collect, use, disclose, and protect
          your information when you use our website and services.
        </p>
      </div>
      <hr />

      {policyData.map((section, idx) => (
        <div className="privacy-section" key={section._id || idx}>
          <h2>{`${idx + 1}. ${formatSection(section.section)}`}</h2>
          <ul>
            {section.items.map((item, i) => (
              <li key={item._id || i}>
                {item.title ? (
                  <>
                    <strong>{formatTitle(item.title)}:</strong>{" "}
                    <span style={{ whiteSpace: "pre-line" }}>{item.value}</span>
                  </>
                ) : (
                  <span style={{ whiteSpace: "pre-line" }}>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
          <hr />
        </div>
      ))}

      <p className="privacy-updated">
        <strong>Last Updated:</strong> {lastUpdated}
      </p>
    </div>
  );
};

export default PrivacyPage;
