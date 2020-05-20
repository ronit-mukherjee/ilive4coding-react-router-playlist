import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Service from "./Pages/Service/Service";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" exact component={Services} />
      <Route path="/services/:id" component={Service} />
    </Switch>
  );
};

export default Routes;
