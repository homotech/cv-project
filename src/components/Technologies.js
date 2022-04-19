import React from "react";
import Photoshop from "../Images/photoshop.png";
import Illustrator from "../Images/illustrator.png";
import Reacticon from "../Images/atom.png";
import Coreldraw from "../Images/cdr.png";
import Sassicon from "../Images/sass.png";

function Technologies() {
  return (
    <div>
      <div className="new-section header">
        <p className="section-header">Technologies</p>
      </div>
      <div className="techs">
        <div>
          <img src={Photoshop} alt="" title="50%" />
        </div>
        <div>
          <img src={Coreldraw} alt="" title="20%" />
        </div>
        <div>
          <img src={Illustrator} alt="" title="50%" />
        </div>
        <div>
          <img src={Sassicon} alt="" title="60%" />
        </div>
        <div>
          <img src={Reacticon} alt="" title="70%" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
