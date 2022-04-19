import React from "react";
import Experience from "./Experience";
import PEicon from "../Images/portfolio.png";

function PracticalExperience() {
  return (
    <div className="new-section">
      <div className="header">
        <img src={PEicon} alt="" className="header-icon" />
        <p className="section-header">Practical Experiences</p>
      </div>
      <Experience
        companyname="Nsebot Ventures"
        position="Graphics Designer & Computer Operator"
        spotlightsone="Utilized Coreldraw for designs got more familiar with it and mastered the micrsoft tools as well."
        spotlightstwo="Managed the designs single-handedly, as the employing company was a growing one."
      />
      <Experience
        companyname="Max Studiox"
        position="Assistant Graphics Designer"
        spotlightsone="Learnt working remotely, time optimization and how to handle multiple tasks(multi-tasking)."
        spotlightstwo="Concentrated majorly on the Adobe Suite Programs(Photoshop and Illustrator more precisely)."
        spotlightsthree="Gained vast knowledge on the design principles (hierarchy, repetition, contrast, proximity, white space and so many more.)"
        spotlightsfour="Improved my communication skills."
      />
      <Experience
        companyname="Wodi Art"
        position="Assistant Graphics Designer"
        spotlightsone="Worked with big brands, added a lot to my design skill, introduced myself to minimalism as a designer, mastered Adobe Illustrator, furthermore."
      />
    </div>
  );
}

export default PracticalExperience;
