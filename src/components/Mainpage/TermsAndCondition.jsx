import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Mainpage Styles/TermsAndCondition.css";

const TermsAndCondition = () => {
  const [termsData, setTermsData] = useState([]);
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    document.title = `Terms and Conditions - Cadila Global LLC`;

    const fetchTerms = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user/termsandcondition`
        );
        const terms = res.data?.data?.[0]?.termsandconditions || [];
        const updatedAt = res.data?.data?.[0]?.updatedAt || "";
        setTermsData(terms);
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
        console.error("Failed to fetch terms data", error);
      }
    };

    fetchTerms();
  }, []);

  const formatTitle = (str) =>
    str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms and Conditions</h1>
        <p>
          Welcome to Cadila Global LLC. By accessing or using our website and
          services, you agree to the following terms and conditions. Please read
          them carefully.
        </p>
      </div>
      <hr />

      {termsData.map((section, idx) => (
        <div className="terms-section" key={section._id || idx}>
          <h2>{`${idx + 1}. ${section.section.replace(/^\d+\.\s*/, "")}`}</h2>

          <ul>
            {section.items.map((item, i) => (
              <li key={item._id || i}>
                {item.title && <strong>{formatTitle(item.title)}:</strong>}

                {item.value.includes("\n") ? (
                  <>
                    {item.value
                      .split("\n")
                      .filter((line) => line.trim() !== "")
                      .map((line, idx) => {
                        const isBullet =
                          line.trim().startsWith("-") ||
                          line.trim().startsWith("*");
                        return isBullet ? (
                          <ul
                            key={idx}
                            style={{
                              paddingLeft: "1.2rem",
                              marginTop: "4px",
                              listStyleType: "disc",
                            }}
                          >
                            <li>{line.replace(/^[-*]\s*/, "")}</li>
                          </ul>
                        ) : (
                          <div
                            key={idx}
                            style={{ marginTop: idx === 0 ? "6px" : "10px" }}
                          >
                            {line}
                          </div>
                        );
                      })}
                  </>
                ) : (
                  <span> {item.value}</span>
                )}
              </li>
            ))}
          </ul>
          <hr />
        </div>
      ))}

      <p className="terms-updated">
        <strong>Last Updated:</strong> {lastUpdated}
      </p>
    </div>
  );
};

export default TermsAndCondition;
