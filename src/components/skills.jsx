import React from "react";

export default function Skills() {
  return (
    <div className="viewContainer">
      <div id="skills" className="centeringContainer">
        <h4 className="color">Skills</h4>
        <p className="skillGenre">Computer Proficiencies</p>
        <div className="skillContainer">
          <p className="skillName">Catia, Smarteam, Solidworks</p>
          <p className="skillName">Jira, Polarion</p>
          <p className="skillName">Microsoft Office, SAP, Slack</p>
        </div>
        <p className="skillGenre">Code specific Experience </p>
        <div className="skillContainer">
          <p className="skillName">React, JSX, Javascript ES6</p>
          <p className="skillName">AJAX, JSON, APIs</p>
          <p className="skillName">Node, Google Cloud, Express</p>
          <p className="skillName">MongoDB, MySQL, JWT</p>
          <p className="skillName">Git, Github, NPM</p>
          <p className="skillName">CSS, HTML, Styled-Components, Material UI, Figma</p>
        </div>
      </div>
    </div>
  );
}
