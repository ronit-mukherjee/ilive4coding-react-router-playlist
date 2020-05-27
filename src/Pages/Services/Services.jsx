import React from "react";
import { Link, Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h2>Services</h2>
      <ul>
        <li>
          <Link to={`${url}/1234`}>Service 1</Link>
        </li>
        <li>
          <Link to={`${url}/5678`}>Service 2</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <Service id={1234} />
          {/* <Redirect to="/services/1234" /> */}
        </Route>
        <Route path={`${path}/:id`} component={Service} />
      </Switch>
    </div>
  );
};

export default Services;
