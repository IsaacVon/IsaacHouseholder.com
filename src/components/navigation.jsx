import React from "react";
import { Link } from "react-scroll";

export default function Navigation() {
  return (
    <>
      <Link to="objective" smooth={true} offset={30} duration={500}>
        <h3>Objective</h3>
      </Link>
      <Link to="portfolio" smooth={true} offset={-180} duration={500}>
        <h3 className="color">Portfolio</h3>
      </Link>

      <Link to="experience" smooth={true} offset={-50} duration={500}>
        <h3>Experience</h3>
      </Link>

      <Link to="education" smooth={true} offset={30} duration={500}>
        <h3>Education</h3>
      </Link>

      <Link to="skills" smooth={true} offset={100} duration={500}>
        <h3>Skills</h3>
      </Link>

      <Link to="letters" smooth={true} offset={-50} duration={500}>
        <h3 className="color">Letters of Recommendation</h3>
      </Link>

      <Link to="hobbies" smooth={true} offset={0} duration={500}>
        <h3>Hobbies</h3>
      </Link>
    </>
  );
}
