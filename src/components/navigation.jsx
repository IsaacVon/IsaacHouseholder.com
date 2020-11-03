import React from "react";
import { Link } from "react-scroll";

export default function Navigation({ handleNavClick }) {
  return (
    <div className="scrollSnap">
      <div>
        <a href="#objective">
          <h3>Objective</h3>
        </a>
        <a href="#portfolio">
          <h3 className="color">Portfolio</h3>
        </a>
        <a href="#experience">
          <h3>Experience</h3>
        </a>
        <a href="#education">
          <h3>Education</h3>
        </a>
        <a href="#skills">
          <h3>Skills</h3>
        </a>
        <a href="#letters">
          <h3 className="color">Letters of Recommendation</h3>
        </a>
        <a href="#hobbies">
          <h3>Hobbies</h3>
        </a>
      </div>
    </div>
  );
}
