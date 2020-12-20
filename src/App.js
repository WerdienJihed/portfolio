import "./App.css";
import { Navbar } from "./Components/Navbar.js";
import { LandingPage } from "./Components/LandingPage.js";
import { Services } from "./Components/Services.js";
import { Projects } from "./Components/Projects.js";
import { Experience } from "./Components/Experience.js";
import { Footer } from "./Components/Footer.js";
import { ContactMe } from "./Components/ContactMe";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <LandingPage />
      <Services />
      <Projects />
      <Experience />
      <Footer /> */}
      <ContactMe />
    </div>
  );
}

export default App;
