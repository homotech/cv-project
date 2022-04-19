import React from "react";
import Technicalskillsicon from "../Images/skills.png";

function TechinicalSkills() {
  return (
    <div className="technical-skills lists">
      <div className="header">
        <img className="header-icon" src={Technicalskillsicon} alt="" />
        <p className="section-header">Technical Skills</p>
      </div>
      <ul>
        <li>Graphics Design</li>
        <li>Task Management</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>JS</li>
        <li>Social Media Platforms</li>
        <li>UI/UX</li>
        <li>Content Creation</li>
      </ul>
    </div>
  );
}

export default TechinicalSkills;
