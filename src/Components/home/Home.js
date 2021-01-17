import { Route, Switch } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { LeandingPage } from "./LandingPage";
import { Contact } from "../contact/Contact";
import { NotFound } from "../404/NotFound";

export function Home() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/portfolio" component={LeandingPage} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
