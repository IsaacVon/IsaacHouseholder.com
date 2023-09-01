import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import textBackground from '../assets/swirlBackground2.png';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // Align text to the inside
  max-width: 300px; // Limit maximum width
  margin: auto; // Center the wrapper
  padding-bottom: 200px;
  align-items: baseline;
`;

const SkillContainer = styled.ul`
  margin: 7px 0px 6px 0px;
  width: 213px;
  font-style: normal;
  font-weight: 500;
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
  align-self: center;
  font-weight: 600;
`;

const SkillGenre = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 15px;
  margin-bottom: 0px;
  margin-top: 31px;
  color: ${colors.black};
`;

const SkillSetWrapper = styled.div`
  border: 1px solid #ccc; // Add border
  padding: 15px;
  margin-bottom: 20px;
`;

export default function Skills() {
  return (
    <Wrapper>
      <Section>Skills</Section>
      <SkillGenre>Front End</SkillGenre>
      <SkillContainer>
        <li>React, TypeScript, Storybook</li>
        <li>JavaScript, Material UI, Styled-Components</li>
        <li>Figma, HTML, CSS</li>
      </SkillContainer>

      <SkillGenre>Back End</SkillGenre>
      <SkillContainer>
        <li>Node, AWS, JWT</li>
        <li>AWS Lambda, API integration, NPM Package</li>
        <li>auth0, MongoDB, GraphQL</li>
        <li>Google Cloud, Cloud Computing</li>
        <li>SQL, NoSQL, Express, Microservices</li>
      </SkillContainer>

      <SkillGenre>Testing & CI/CD</SkillGenre>
      <SkillContainer>
        <li>Unit/Acceptance testing with Jest</li>
        <li>E2E testing with Playwright, Sentry</li>
        <li>Automated testing with GitHub Actions</li>
        <li>Split testing with split.io, io-ts</li>
      </SkillContainer>

      <SkillGenre>Collaboration & Methodologies</SkillGenre>
      <SkillContainer>
        <li>Cross-functional team, Jira</li>
        <li>Trello, code review, Agile ceremonies</li>
        <li>Retrospective facilitation, Git</li>
        <li>Github, SDLC best practices</li>
      </SkillContainer>
    </Wrapper>
  );
}
