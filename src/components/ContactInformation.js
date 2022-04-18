import React from "react";
import Github from "../Images/github@3x.png";
import Instagram from "../Images/instagram@3x.png";
import Twitter from "../Images/twitter@3x.png";
function ContactInformation() {
  return (
    <div className="contact-information">
      <h1 className="ci-header">Contact Information</h1>
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
          <img src={Instagram} alt="" />
        </a>
        <a href="https://twitter.com/nartistic999">
          {" "}
          <img src={Twitter} alt="" />
        </a>
        <a href="github.com/homotech">
          <img src={Github} alt="" />
        </a>
      </div>
    </div>
  );
}
export default ContactInformation;
