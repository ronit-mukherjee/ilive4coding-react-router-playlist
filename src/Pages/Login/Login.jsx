import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ onLogin }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmitted = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "password") {
      onLogin(true); //Set parent state of isLoggedIn to true
      history.push("/premium-content");
    }
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <h2>Login</h2>
        <form onSubmit={onFormSubmitted}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
