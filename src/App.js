import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./Components/home/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
