import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { ContactMe } from "./Components/ContactMe";
import { Skills } from "./Components/Skills";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/contactMe" component={ContactMe} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
