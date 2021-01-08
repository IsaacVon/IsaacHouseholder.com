import React from "react";
import styled from "styled-components";

import whatGrows from "../assets/portfolioIcons/whatgrows.svg";
import chungAndAssociates from "../assets/portfolioIcons/chung.svg";
import hawaiiLavaZones from "../assets/portfolioIcons/hawaiiLavaZonesText.png";
import doneWithIt from "../assets/portfolioIcons/doneWithIt.png";
import textBackground from "../assets/swirlBackground2.png";

const IconContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0px;
`;

const Container = styled.section`
  flex: 1 1 300px;
  margin: 5px;
  display: grid;
  place-items: center;
  /* background-color: yellowgreen; */
  height: 200px;
`;

const HawaiiLavaZones = styled.img`
  width: 167px;
`;

const ChungAndAssociates = styled.img`
  width: 150px;
`;

const WhatGrows = styled.img`
  width: 145px;
`;

const DoneWithIt = styled.img`
  width: 106px;
  border-radius: 24px;
  overflow: hidden;
`;

const Section = styled.h1`
  background: url(${textBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  color: #2c2d52;
  font-size: 34px;
  margin-top: 70px;
`;

export default function Portfolio() {
  return (
    <>
      <Section>Portfolio</Section>
      <IconContainer>
        <Container>
          <a
            href="https://hawaiilavazones.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HawaiiLavaZones src={hawaiiLavaZones} alt="Hawaii Lava Zones" />
          </a>
        </Container>
        <Container>
          <a
            href="http://chungandassociates.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ChungAndAssociates
              src={chungAndAssociates}
              alt="Chung And Associates"
            />
          </a>
        </Container>
        <Container>
          <a
            href="https://www.whatgrows.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatGrows src={whatGrows} alt="What Grows" />
          </a>
        </Container>{" "}
        <Container>
          <a
            href="https://expo.io/@isaacvon/projects/DoneWithIt?release-channel=staging"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DoneWithIt src={doneWithIt} alt="DoneWithIt" />
          </a>
        </Container>
      </IconContainer>
    </>
  );
}
