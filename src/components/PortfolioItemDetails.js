import React from "react";
import styled from "styled-components";

import textBackground from "../assets/swirlBackground2.png";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Outline = styled.section`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0px;
  max-width: 631px;
  min-width: 450px;

  min-height: 500px;
  border-radius: 25px;
  border: 1px solid black;
`;

const Header = styled.h1`
  position: absolute;

  background: url(${textBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  color: #2c2d52;
  font-size: 20px;

  top: 20px;
  left: 20px;
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
console.log("portfolioDetails", portfolioDetails[0].gitHubUrl);

function PortfolioItemDetails({ projectName, projectDescription }) {
  return (
    <Wrapper>
      <Outline>
        <Header>Portfolio</Header>

        {portfolioDetails[0].image}
      </Outline>
    </Wrapper>
  );
}

export default PortfolioItemDetails;
