import React from "react";
import styled from "styled-components";
import textBackground from "../assets/swirlBackground2.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-bottom: 200px;
`;

const SkillContainer = styled.section`
  margin: 7px 0px 6px 0px;
  width: 213px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Section = styled.h1`
  background: url(${textBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-align: center;
  color: #2c2d52;
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
  color: #2c2d52;
`;

const SkillName = styled.li`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 30px;
  text-align: left;
  list-style-type: none;
`;

export default function Skills() {
  return (
    <Wrapper>
      <Section>Skills</Section>
      <SkillGenre>Computer Proficiencies</SkillGenre>
      <SkillContainer>
        <SkillName>Catia, Smarteam, Solidworks</SkillName>
        <SkillName>Jira, Polarion</SkillName>
        <SkillName>Microsoft Office, SAP, Slack</SkillName>
      </SkillContainer>
      <SkillGenre>Code specific Experience </SkillGenre>
      <SkillContainer>
        <SkillName>React, JSX, Javascript ES6</SkillName>
        <SkillName>AJAX, JSON, APIs</SkillName>
        <SkillName>Node, Google Cloud, Express</SkillName>
        <SkillName>MongoDB, MySQL, JWT</SkillName>
        <SkillName>Git, Github, NPM</SkillName>
        <SkillName>CSS, HTML, Styled-Components, Material UI, Figma</SkillName>
      </SkillContainer>
    </Wrapper>
  );
}
