import React from "react";

export default function Skills() {
  return (
    <>
          <div id="skills" className="spacer"></div>

      <h4  className="color">Skills</h4>
      <p className="skillGenre">Computer Proficiencies</p>
      <div className="skillContainer">
        <p className="skillName">
          Catia, Figma, Jira, MS Office, MTESTQuattro, Polarion, SAP, Slack,
          Smarteam, Solidworks
        </p>
      </div>
      <p className="skillGenre">Code specific Experience </p>
      <div className="skillContainer">
        <p className="skillName">React, JSX, Javascript ES6</p>
        <p className="skillName">AJAX, JSON, APIs</p>
        <p className="skillName">
          Node, Google Cloud, MongoDB, MySQL, Express, JWT
        </p>
        <p className="skillName">Git, Github, NPM</p>
        <p className="skillName">CSS, HTML, Material UI</p>
      </div>
      <div className="spacer"></div>
    </>
  );
}
