import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Login/Login";
import PremiumContent from "./Pages/PremiumContent/PremiumContent";

const Routes = () => {
  const isLoggedIn = false;

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Services" component={Services} />
      <Route path="/login" component={Login} />
      <Route path="/premium-content">
        {isLoggedIn ? <PremiumContent /> : <Redirect to="/login" />}
      </Route>
      <Redirect from="/REGISTER" to="/login" sensitive />
    </Switch>
  );
};

export default Routes;
