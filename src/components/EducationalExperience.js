import React from "react";
import Educationicon from "../Images/book-stack.png";
import EExperience from "./EExperience";

function EducationalExperience() {
  return (
    <div className="new-section">
      <div className="eexperience-h header">
        <img className="header-icon" src={Educationicon} alt="" />
        <p className="section-header">Education</p>
      </div>
      <div className="educational-experience">
        <EExperience
          schoolname="Federal University Lafia - Nasarawa State (FULAFIA)"
          certificategained="BSC - Medical Laboratory Science"
          yeargraduated="Present"
        />
        <EExperience
          schoolname="Side Hustle Internship 5.0 "
          certificategained="Certificate of Completion(ReactJS)"
          yeargraduated="Present"
        />
        <EExperience
          schoolname="God's Own School Masaka"
          certificategained="SSCE"
          yeargraduated="2015"
        />
        <EExperience
          schoolname="JSSG (Junior Secondary School Gwagwa)"
          certificategained="JSCE"
          yeargraduated="2012"
        />
        <EExperience
          schoolname="L.E.A Primary School Tasha"
          certificategained="FSLC"
          yeargraduated="2009"
        />
      </div>
    </div>
  );
}

export default EducationalExperience;
