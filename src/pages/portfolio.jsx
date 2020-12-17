import React from "react";
import whatGrows from "../assets/portfolioIcons/whatgrows.svg";
import chungAndAssociates from "../assets/portfolioIcons/chung.svg";
import hawaiiLavaZones from "../assets/portfolioIcons/hawaiiLavaZonesText.png";
import styled from "styled-components";

import textBackground from "../assets/swirlBackground2.png";


const IconContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0px;
`;

const Container = styled.section`
  flex: 0 1 300px;
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

const ImageWhatGrows = styled.img`
  width: 145px;
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
            <ImageWhatGrows src={whatGrows} alt="What Grows" />
          </a>
        </Container>
      </IconContainer>
    </>
  );
}
