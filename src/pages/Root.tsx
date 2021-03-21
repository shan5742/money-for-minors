import { Route, Switch } from "react-router-dom";
import { AboutPage } from "./About/AboutPage";
import { ContactPage } from "./Contact/ContactPage";
import { HomePage } from "./Home/HomePage";
import { ThanksPage } from "./Thanks/ThanksPage";

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
        <ThanksPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};
