import React from "react";
import Objectiveicon from "../Images/target.png";

function Objectives() {
  return (
    <div className="objectives">
      <div className="header">
        <img className="header-icon" src={Objectiveicon} alt="" />
        <h3 className="section-header">Objectives</h3>
      </div>
      <p className="section-paragraph ">
        Eagerly looking to expand my knowledge in the design world, bringing
        more experience and as well dishing out premium services to my potential
        clients/employers
      </p>
    </div>
  );
}
export default Objectives;
