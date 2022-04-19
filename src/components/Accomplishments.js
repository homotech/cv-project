import React from "react";
import Accomplishmentsicon from "../Images/goal.png";

function Accomplishments() {
  return (
    <div className="new-section lists">
      <div className="header">
        <img className="header-icon" src={Accomplishmentsicon} alt="" />
        <p className="section-header">Accomplisments</p>
      </div>
      <ul>
        <li>1yr+ doing design</li>
        <li>Satisfied over 20+ clients</li>
        <li>Worked for Npower</li>
      </ul>
    </div>
  );
}

export default Accomplishments;
