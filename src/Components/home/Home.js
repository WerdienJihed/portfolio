import { Route, Switch } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { LeandingPage } from "./LandingPage";
import { Contact } from "../contact/Contact";
import { NoMatch } from "../404/NoMatch";

export function Home() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={LeandingPage} />
        <Route path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}
