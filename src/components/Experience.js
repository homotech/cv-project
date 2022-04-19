import React from "react";

function Experience(props) {
  const companyname = props.companyname;
  const position = props.position;
  const spotlightsone = props.spotlightsone;
  const spotlightstwo = props.spotlightstwo;
  const spotlightsthree = props.spotlightsthree;
  const spotlightsfour = props.spotlightsfour;
  return (
    <div className="experience ">
      <p className="companyname">{companyname}</p>
      <p className="position">{position}</p>
      <div className="spotlights ">
        <p className="section-paragraph">{spotlightsone}</p>
        <p className="section-paragraph">{spotlightstwo}</p>
        <p className={spotlightsthree !== "" && "section-paragraph"}>
          {spotlightsthree}
        </p>
        <p className={spotlightsfour !== "" && "section-paragraph"}>
          {spotlightsfour}
        </p>
      </div>
    </div>
  );
}

export default Experience;
