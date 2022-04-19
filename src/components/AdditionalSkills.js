import React from "react";
import Additionalskillsicon from "../Images/page.png";

function AdditionalSkills() {
  return (
    <div className="new-section lists">
      <div className="header">
        <img className="header-icon" src={Additionalskillsicon} alt="" />
        <p className="section-header">Soft Skills</p>
      </div>
      <ul>
        <li>Effective Communicator</li>
        <li>Adaptability</li>
        <li>Attention to details</li>
        <li>Selective</li>
        <li>Organized</li>
        <li>Creativity</li>
        <li>Careful with instructions</li>
        <li>Aesthetics</li>
        <li>Good eye for colors</li>
        <li>Time Management</li>
      </ul>
    </div>
  );
}

export default AdditionalSkills;
