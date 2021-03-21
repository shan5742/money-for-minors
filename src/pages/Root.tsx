import { Route, Switch } from "react-router-dom";
import { AboutPage } from "./About/AboutPage";
import { ContactPage } from "./Contact/ContactPage";
import { HomePage } from "./Home/HomePage";

export const PageRouter = () => {
  return (
    <Switch>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <Route path="/thanks">
        <h1>weeeeee</h1>
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
