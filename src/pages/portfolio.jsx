import React from "react";
import whatGrows from "../assets/portfolioIcons/whatgrows.svg";
import chungAndAssociates from "../assets/portfolioIcons/chung.svg";
import hawaiiLavaZones from "../assets/portfolioIcons/hawaiiLavaZonesText.png";
import styled from "styled-components";

import textBackground from "../assets/swirlBackground2.png";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 44px;
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
  width: 183px;
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
  margin-top: 10vw;
`;

export default function Portfolio() {
  return (
    <>
      <Section>Portfolio</Section>
      <Wrapper>
        <Container>
          <HawaiiLavaZones src={hawaiiLavaZones} alt="Hawaii Lava Zones" />
        </Container>
        <Container>
          <ChungAndAssociates
            src={chungAndAssociates}
            alt="Chung And Associates"
          />
        </Container>
        <Container>
          <ImageWhatGrows src={whatGrows} alt="What Grows" />
        </Container>
      </Wrapper>
    </>
  );
}
