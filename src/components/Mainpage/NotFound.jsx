import React from "react";
import "../../styles/Mainpage Styles/NotFound.css"; // Import external CSS
import notFoundImage from "../../assets/not-found.png"; // Adjust path if needed

const NotFound = () => {
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
