import React from "react";
import styled from "styled-components";

import colors from "../config/colors";
import gitHub from "../assets/socialLinks/gitHub.png";
import textBackground from "../assets/swirlBackground2.png";
import Button from "./Button";
import IconLink from "./IconLink";
import BackButton from "./BackButton";
import TechIcon from "./techIcon";

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

const PortfolioText = styled.h2`
  background: url(${textBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  color: ${colors.black};
  font-size: 20px;
  margin: 0;
  line-height: normal;
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
  cursor: pointer;
`;

const SectionTitle = styled.h1`
  color: ${colors.black};
  font-size: 21px;
  margin-top: 24px;
  font-weight: lighter;
  line-height: normal;
  text-align: center;
`;

const SectionSubTitle = styled.h2`
  color: ${colors.black};
  text-align: left;
  font-size: 18px;
  margin-top: 40px;
  font-weight: lighter;
  line-height: normal;
`;

const BodyText = styled.p`
  color: ${colors.black};
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 300;
  line-height: 19px;
  text-align: justify;
`;

const TextContainer = styled.section`
  margin: 20px;
  max-width: 480px;
`;
const ProjectLogo = styled.img`
  width: 145px;
  margin-top: 100px;
`;

function PortfolioItemDetails({ projectText, imageToDisplay, setShowDetails }) {
  const { title, description, tech, webUrl, gitHubUrl } = projectText;



  return (
    <Wrapper>
      <Outline>
        <BackContainer onClick={() => setShowDetails(false)}>
          <BackButton />
          <PortfolioText>Portfolio</PortfolioText>
        </BackContainer>
        <ProjectLogo src={imageToDisplay} alt="Logo" />
        <TextContainer>
          <SectionTitle>{title}</SectionTitle>
          <SectionSubTitle>Description</SectionSubTitle>
          <BodyText>{description}</BodyText>
          <SectionSubTitle>Technologies</SectionSubTitle>
          {tech.map((iconName) => (
            <TechIcon iconName={iconName} />
          ))}
        </TextContainer>
        <LinksContainer>
          <IconLink url={gitHubUrl} img={gitHub} alt="github" size="31px" />
          <Button title="Visit Site" url={webUrl} />
        </LinksContainer>
      </Outline>
    </Wrapper>
  );
}

export default PortfolioItemDetails;
