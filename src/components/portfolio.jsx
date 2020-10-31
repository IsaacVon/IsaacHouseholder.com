import React from "react";
import whatGrows from "../assets/portfolioIcons/hawaiiLavaZones.jpg";
import chungAndAssociates from "../assets/portfolioIcons/hawaiiLavaZones.jpg";
import hawaiiLavaZones from "../assets/portfolioIcons/hawaiiLavaZones.jpg";

export default function Portfolio() {
  return (
    <div className="portfolioBackground">
      <div className="portfolioContainer">
        <div className="portfolioIconWhatGrows">
          <a
            href="https://www.whatgrows.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatGrows} alt="whatGrows" />
          </a>
        </div>

        <div className="portfolioIconChungAndAssociates">
          <a
            href="http://chungandassociates.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={chungAndAssociates} alt="chungAndAssociates" />
          </a>
        </div>
        <div className="portfolioIconHawaiiLavaZones">
          <a
            href="https://hawaiilavazones.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={hawaiiLavaZones} alt="hawaiiLavaZones" />
          </a>
        </div>
      </div>
    </div>
  );
}
