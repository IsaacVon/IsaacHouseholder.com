import React from "react";
import styled from "styled-components";

import whatGrows from "../assets/portfolioIcons/whatgrows.svg";
import colors from "../config/colors";
import gitHub from "../assets/socialLinks/gitHub.png";
import textBackground from "../assets/swirlBackground2.png";
import Button from "./Button";
import IconLink from "./IconLink";
import BackButton from "./BackButton";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  padding-top: 40px;
`;

const Outline = styled.section`
  position: relative;
  color: ${colors.black};
  flex-direction: column;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0px;
  /* max-width: 631px; */
  width: 631px;
  min-height: 500px;
  border-radius: 25px;
  border: 1px solid ${colors.black};
  margin: 20px;
`;

const Header = styled.h1`
  background: url(${textBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  color: #2c2d52;
  font-size: 20px;
  margin: 0;
`;

const LinksContainer = styled.section`
  align-items: center;
  bottom: 20px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 100px;
`;

const BackContainer = styled.section`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const SectionTitle = styled.h2`
  color: ${colors.black};
  font-size: 20px;
  margin-top: 40px;
  font-weight: lighter;
  line-height: normal;
`;

const BodyText = styled.p`
  color: ${colors.black};
  font-size: 11px;
`;

const TextContainer = styled.section`
  margin: 20px;
  max-width: 480px;
`;
const WhatGrows = styled.img`
  width: 145px;
  height: 100px;
  margin-top: 100px;
`;

const portfolioDetails = [
  {
    image: "Image",
    summary:
      "I created this site because I could not find a tool get a list of “What Grows” in your area. The user will enter a zip code and WhatGrows returns a list of plants that will grow in that zip code. There are various filters that can be applied to refine search results. Users can create accounts to add favorite plants and notes.",
    tech:
      "MongoDB, Express, React, Node.js, API, AXIOS, JWT, Mongoose, Google Maps, Styled Components",
    webUrl: "https://www.whatgrows.org/",
    gitHubUrl: "https://github.com/IsaacVon/WhatGrows.org",
  },
  {
    image: "Image",
    summary: "summary",
    tech: "tech",
    webUrl: "w",
    gitHubUrl: "w",
  },
  {
    image: "Image",
    summary: "summary",
    tech: "tech",
    webUrl: "w",
    gitHubUrl: "w",
  },
  {
    image: "Image",
    summary: "summary",
    tech: "tech",
    webUrl: "w",
    gitHubUrl: "w",
  },
];

function PortfolioItemDetails({ setShowDetails }) {
  return (
    <Wrapper>
      <Outline>
        <BackContainer>
          <BackButton handleClick={() => setShowDetails(false)} />
          <Header>Portfolio</Header>
        </BackContainer>

        <WhatGrows src={whatGrows} alt="What Grows" />
        <TextContainer>
          <SectionTitle>Summary</SectionTitle>
          <BodyText>{portfolioDetails[0].summary}</BodyText>
          <SectionTitle>Technologies</SectionTitle>
          <BodyText>{portfolioDetails[0].tech}</BodyText>
        </TextContainer>
        <LinksContainer>
          <IconLink
            url="https://github.com/IsaacVon/WhatGrows.org"
            img={gitHub}
            alt="github"
            size="31px"
          />
          <Button title="Visit Site" url="https://www.whatgrows.org/" />
        </LinksContainer>
      </Outline>
    </Wrapper>
  );
}

export default PortfolioItemDetails;
