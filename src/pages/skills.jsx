import React from "react";
import styled from "styled-components";

import colors from "../config/colors";
import textBackground from "../assets/swirlBackground2.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-bottom: 200px;
`;

const SkillContainer = styled.ul`
  margin: 7px 0px 6px 0px;
  width: 213px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 30px;
  text-align: left;
  list-style-type: none;
  padding-inline-start: 0px;
`;

const Section = styled.h1`
  background: url(${textBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  color: ${colors.black};
  font-size: 34px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const SkillGenre = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 15px;
  margin-bottom: 0px;
  color: ${colors.black};
`;

export default function Skills() {
  return (
    <Wrapper>
      <Section>Skills</Section>
      <SkillGenre>Computer Proficiencies</SkillGenre>
      <SkillContainer>
        <li>Catia, Smarteam, Solidworks</li>
        <li>Jira, Polarion</li>
        <li>Microsoft Office, SAP, Slack</li>
      </SkillContainer>
      <SkillGenre>Code specific Experience </SkillGenre>
      <SkillContainer>
        <li>React.js, React-Native, JSX, Javascript ES6</li>
        <li>AJAX, JSON, APIs, GraphQL</li>
        <li>Node, Google Cloud Platform, Express</li>
        <li>MongoDB, MySQL, JWT</li>
        <li>Git, Github, NPM</li>
        <li>CSS, HTML, Styled-Components, Material UI</li>
        <li>Formik, Figma</li>
      </SkillContainer>
    </Wrapper>
  );
}
