import "./App.css";
import Accomplishments from "./components/Accomplishments";
import AdditionalSkills from "./components/AdditionalSkills";
import ContactInformation from "./components/ContactInformation";
import EducationalExperience from "./components/EducationalExperience";
import NameAndAbout from "./components/NameAndAbout";
import Hello from "./components/Hello";
import Objectives from "./components/Objectives";
import PracticalExperience from "./components/PracticalExperience";
import TechinicalSkills from "./components/TechinicalSkills";
import UserImage from "./components/UserImage";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="App">
      <div className="circleone"></div>
      <div className="first-row grid">
        <div className="first-column">
          <Hello />
        </div>
        <div className="second-column">
          <UserImage />
        </div>
        <div className="third-column">
          {/* //Contact information */}
          <NameAndAbout />

          <ContactInformation />
        </div>
      </div>
      <div className="second-row grid">
        <div className="first-column"></div>
        <div className="second-column">
          <Objectives />
          <EducationalExperience />
          <PracticalExperience />
        </div>
        <div className="third-column">
          <TechinicalSkills />
          <AdditionalSkills />
          <Accomplishments />
          <Technologies />
        </div>
      </div>
    </div>
  );
}

export default App;
