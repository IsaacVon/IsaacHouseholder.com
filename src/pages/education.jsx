import React from 'react';
import styled from 'styled-components';

import colors from '../config/colors';
import SectionHeader from '../components/SectionHeader';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-bottom: 200px;
`;

const SchoolName = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 15px;
  color: ${colors.black};
  line-height: 22px;
  margin: 31px 52px 0px 52px;
`;

const DegreeType = styled.h3`
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  margin-top: 10px;
`;

export default function Education() {
  return (
    <>
      <SectionHeader>Education</SectionHeader>
      <Wrapper>
        <SchoolName>Coding Boot Camp</SchoolName>
        <DegreeType>University of California Irvine 2020</DegreeType>
        <SchoolName>Bachelor of Science in Mechanical Engineering</SchoolName>
        <DegreeType>California Baptist University 2012-2016</DegreeType>
      </Wrapper>{' '}
    </>
  );
}
