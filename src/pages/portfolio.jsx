import React, { useState } from "react";
import styled from "styled-components";

import colors from "../config/colors";
import projectDetails from "../assets/projectDetails";
import whatGrows from "../assets/portfolioIcons/whatgrows.png";
import chungAndAssociates from "../assets/portfolioIcons/chung.png";
import hawaiiLavaZones from "../assets/portfolioIcons/hawaiiLavaZonesText.png";
import doneWithIt from "../assets/portfolioIcons/doneWithIt.png";
import textBackground from "../assets/swirlBackground2.png";
import PortfolioItemDetails from "../components/PortfolioItemDetails";

const IconContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0px;
  max-width: 550px;
  margin: 6px auto;
`;

const Container = styled.section`
  flex: 1 1 200px;
  margin: 5px;
  display: grid;
  place-items: center;
  /* background-color: yellowgreen; */
  height: 200px;
`;

const HawaiiLavaZones = styled.img`
  width: 167px;
  cursor: pointer;
`;

const ChungAndAssociates = styled.img`
  width: 150px;
  cursor: pointer;
`;

const WhatGrows = styled.img`
  width: 145px;
  cursor: pointer;
`;

const DoneWithIt = styled.img`
  width: 106px;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
`;

const Section = styled.h1`
  background: url(${textBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  color: ${colors.black};
  font-size: 34px;
  margin-top: 70px;
`;

export default function Portfolio({ closeNav }) {
  const [showDetails, setShowDetails] = useState(false);
  const [imageToDisplay, setImageToDisplay] = useState();
  const [projectText, setProjectText] = useState();

  const [
    hawaiiLavaZonesDetails,
    chungAndAssociatesDetails,
    whatGrowsDetails,
    doneWithItDetails,
  ] = projectDetails;

  const handleClick = (project) => {
    closeNav();
    setShowDetails(true);

    if (project === "hawaiiLavaZones") {
      setImageToDisplay(hawaiiLavaZones);
      setProjectText(hawaiiLavaZonesDetails);
    }
    if (project === "chungAndAssociates") {
      setImageToDisplay(chungAndAssociates);
      setProjectText(chungAndAssociatesDetails);
    }
    if (project === "whatGrows") {
      setImageToDisplay(whatGrows);
      setProjectText(whatGrowsDetails);
    }
    if (project === "doneWithIt") {
      setImageToDisplay(doneWithIt);
      setProjectText(doneWithItDetails);
    }
  };

  return (
    <>
      {showDetails && (
        <PortfolioItemDetails
          imageToDisplay={imageToDisplay}
          projectText={projectText}
          setShowDetails={setShowDetails}
        />
      )}
      {!showDetails && (
        <>
          <Section>Portfolio</Section>
          <IconContainer>
            <Container>
              <WhatGrows
                onClick={() => handleClick("whatGrows")}
                src={whatGrows}
                alt="What Grows"
              />
            </Container>
            <Container>
              <HawaiiLavaZones
                onClick={() => handleClick("hawaiiLavaZones")}
                src={hawaiiLavaZones}
                alt="Hawaii Lava Zones"
              />
            </Container>
            <Container>
              <DoneWithIt
                onClick={() => handleClick("doneWithIt")}
                src={doneWithIt}
                alt="DoneWithIt"
              />
            </Container>
            <Container>
              <ChungAndAssociates
                onClick={() => handleClick("chungAndAssociates")}
                src={chungAndAssociates}
                alt="Chung And Associates"
              />
            </Container>
          </IconContainer>
        </>
      )}
    </>
  );
}
