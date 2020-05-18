import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Routes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
