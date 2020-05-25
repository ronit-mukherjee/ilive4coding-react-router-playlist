import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h2>Services</h2>

      <Route path={path}>
        <ul>
          <li>
            <Link to={`${url}/1234`}>Service 1</Link>
          </li>
          <li>
            <Link to={`${url}/5678`}>Service 2</Link>
          </li>
        </ul>
      </Route>
      <Route path={`${path}/:id`} component={Service} />
    </div>
  );
};

export default Services;
