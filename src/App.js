import "./App.css";
import ContactInformation from "./components/ContactInformation";
import Header from "./components/Header";
import Hello from "./components/Hello";
import UserImage from "./components/UserImage";

function App() {
  return (
    <div className="App">
      <div className="first-row grid">
        <div className="first-column">
          <Hello />
        </div>
        <div className="second-column">
          <UserImage />
        </div>
        <div className="third-column">
          {/* //Contact information */}
          <Header />

          <ContactInformation />
        </div>
      </div>
    </div>
  );
}

export default App;
