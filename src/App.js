import React from "react";

import Header from "./components/header";
import SocialLinks from "./components/socialLinks";
import Navigation from "./components/navigation";
import Objective from "./components/objective";
import Portfolio from "./components/portfolio";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";
import LettersOfRecommendation from "./components/lettersOfRecommendation";
import Hobbies from "./components/hobbies";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="maxWidthContainer">
          <div className="scrollSnap">
            <Header />
            <SocialLinks />
          </div>
          <Navigation />
          <Objective />
          <Portfolio />
          <Experience />
          <Education />
          <Skills />
          <LettersOfRecommendation />
          <Hobbies />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
