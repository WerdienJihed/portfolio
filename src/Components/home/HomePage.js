import { Route, Switch } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Home } from "./Home";
import { Contact } from "./../contact/Contact";

export function HomePage() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
