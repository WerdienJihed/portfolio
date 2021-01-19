import { useEffect } from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { Home } from "./Components/home/Home";
import ReactGA from "react-ga";
function App() {
  useEffect(() => {
    ReactGA.initialize("G-Z443LGNGNY");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <HashRouter basename="/">
      <div className="App">
        <Home />
      </div>
    </HashRouter>
  );
}
export default App;
