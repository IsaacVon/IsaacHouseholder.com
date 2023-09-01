import React from 'react';
import styled from 'styled-components';
import colors from '../config/colors';
import SectionHeader from '../components/SectionHeader';
import skills from '../assets/data/skills';

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
  width: 310px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;
  text-align: left;
  list-style-type: none;
  padding-inline-start: 0px;
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

export default function Skills() {
  return (
    <>
      <SectionHeader>Skills</SectionHeader>
      <Wrapper>
        {skills.map((section, index) => (
          <div key={index}>
            <SkillGenre>{section.skillGenre}</SkillGenre>
            <SkillContainer>
              {section.skillList.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </SkillContainer>
          </div>
        ))}
      </Wrapper>
    </>
  );
}
