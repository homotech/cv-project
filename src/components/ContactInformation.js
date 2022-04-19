import React from "react";
import Github from "../Images/github@3x.png";
import Instagram from "../Images/instagram@3x.png";
import Twitter from "../Images/twitter@3x.png";
function ContactInformation() {
  return (
    <div className="contact-information">
      <p className="ci-header section-header">Contact Information</p>
      <div className="tel-numbers">
        {/* Phone Number */}
        <div className="primary-number">
          <p>Primary Number</p>
          <a href="tel:08069685130">08069685130 </a>
        </div>

        <div className="secondary-number">
          <p>Secondary Number</p>
          <a href="tel:09014633732">09014633732</a>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="social-media-links">
        <h3>Reach me on social Media</h3>
        <a href="https://instagram.com/nartisticgraphics">
          {" "}
          <img src={Instagram} className="imagecenter" alt="" />
        </a>
        <a href="https://twitter.com/nartistic999">
          {" "}
          <img src={Twitter} className="imagecenter" alt="" />
        </a>
        <a href="https://github.com/homotech">
          <img src={Github} className="imagecenter" alt="" />
        </a>
      </div>
    </div>
  );
}
export default ContactInformation;
