import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/home";
import Skills from "./pages/skills";
import Education from "./pages/education";
import Hobbies from "./pages/hobbies";
import Objective from "./pages/objective";
import Recommendations from "./pages/recommendations";
import Experience from "./pages/experience";
import Portfolio from "./pages/portfolio";
import NavBar from "./components/navBar";

import "./App.css";

function App() {
  const [expandNav, setExpandNav] = useState(false);

  const toggleNav = () => {
    expandNav ? setExpandNav(false) : setExpandNav(true);
  };

  const closeNav = () => {
    setExpandNav(false);
  };

  return (
    <Router>
      <NavBar expandNav={expandNav} toggleNav={toggleNav} />
      <Switch>
        <Route
          path="/portfolio"
          render={() => <Portfolio closeNav={closeNav} />}
        />
        <Route path="/experience" component={Experience} />
        <Route path="/recommendations" component={Recommendations} />
        <Route path="/objective" component={Objective} />
        <Route path="/skills" component={Skills} />
        <Route path="/education" component={Education} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
