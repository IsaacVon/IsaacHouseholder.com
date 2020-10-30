import React from "react";
import gitHub from "../assets/socialLinks/gitHub.png";
import gmail from "../assets/socialLinks/gmail.png";
import linkedIn from "../assets/socialLinks/linkedIn.png";

export default function SocialLinks() {
  return (
    <div className="socialLinkBackground">
      <div className="socialLinkPaper">
        <div className="socialLinkContainer">
          <a href="https://github.com/IsaacVon">
            <img src={gitHub} alt="gitHub" />
          </a>
          <a href="mailto:isaachouseholder@gmail.com">
            <img src={gmail} alt="gmail" />
          </a>
          <a href="https://www.linkedin.com/in/isaachouseholder/">
            <img src={linkedIn} alt="linkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}
