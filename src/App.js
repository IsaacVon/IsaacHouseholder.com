import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Education from "./pages/education";
import Experience from "./pages/experience";
import Hobbies from "./pages/hobbies";
import Home from "./pages/home";
import NavBar from "./components/navBar";
import Objective from "./pages/objective";
import Portfolio from "./pages/portfolio";
import Recommendations from "./pages/recommendations";
import Skills from "./pages/skills";

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
