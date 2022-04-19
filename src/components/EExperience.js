import React from "react";

function EExperience(props) {
  const schoolname = props.schoolname;
  const certificategained = props.certificategained;
  const yeargraduated = props.yeargraduated;
  return (
    <div className="e-experience">
      <p className="year-grad">{yeargraduated}</p>
      <p className="sch-name">{schoolname}</p>
      <p className="cert">{certificategained}</p>
    </div>
  );
}

export default EExperience;
