import "./App.css";
import { HashRouter } from "react-router-dom";
import { Home } from "./Components/home/Home";
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Home />
      </div>
    </HashRouter>
  );
}

export default App;
