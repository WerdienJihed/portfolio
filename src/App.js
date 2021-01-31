import "./App.css";
import { Home } from "./Components/home/Home";
import ReactGA from "react-ga";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

ReactGA.initialize("UA-152436498-1");

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    AOS.init();
  }, []);

  AOS.init();

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
