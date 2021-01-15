import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./Components/home/HomePage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePage />
      </div>
    </BrowserRouter>
  );
}

export default App;
