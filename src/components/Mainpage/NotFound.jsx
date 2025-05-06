import React, { useEffect } from "react";
import "../../styles/Mainpage Styles/NotFound.css";
import notFoundImage from "../../assets/not-found.png";

const NotFound = () => {
  useEffect(() => {
    document.title = `Page not found - Cadila Global LLC`;
  }, []);

  return (
    <div className="not-found-container">
      <img
        src={notFoundImage}
        alt="404 Not Found"
        className="not-found-image"
      />
    </div>
  );
};

export default NotFound;
