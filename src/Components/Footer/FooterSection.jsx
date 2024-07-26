import React from "react";
import "./FooterSection.css";
import MediaLogo from "./MediaLogo";
const FooterSection = () => {
  return (
    <div className="footer-section">
      <h5 className="footer-heading">
        Stay Up To Date with our News and Notifications
      </h5>
      <MediaLogo />
      <div className="footer-content">
        Copyright © Live the code 3.0 | All rights reserved
      </div>
    </div>
  );
};

export default FooterSection;
