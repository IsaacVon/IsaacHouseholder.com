import React from "react";
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
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/experience" component={Experience} />
        <Route path="/recommendations" component={Recommendations} />
        <Route path="/objective" component={Objective} />
        <Route path="/skills" component={Skills} />
        <Route path="/education" component={Education} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>

    //   <div className="app">
    //     <div className="maxWidthContainer">
    //       <Header />
    //       <SocialLinks />
    //       <Navigation />
    //       <Objective />
    //       <Portfolio />
    //       <Experience />
    //       <Education />
    //       <Skills />
    //       <LettersOfRecommendation />
    //       <Hobbies />
    //       <Footer />
    //     </div>
    //   </div>
  );
}

export default App;
