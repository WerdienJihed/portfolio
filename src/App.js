import "./App.css";
import { Navbar } from "./Components/home/navbar/Navbar";
import { Home } from "./Components/home/Home";
import { Contact } from "./Components/contact/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
