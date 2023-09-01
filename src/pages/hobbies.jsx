import React from 'react';
import styled from 'styled-components';

import SectionHeader from '../components/SectionHeader';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-bottom: 200px;
  margin-top: 17px;
`;

const HobbyList = styled.ul`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  list-style-type: none;
  padding-inline-start: 0px;
`;

export default function Hobbies() {
  return (
    <>
      <SectionHeader>Hobbies</SectionHeader>
      <Wrapper>
        <HobbyList>
          <li>Hiking with family</li>
          <li>Computers</li>
          <li>Motorcycles</li>
          <li>Learning</li>
          <li>Eating</li>
        </HobbyList>
      </Wrapper>
    </>
  );
}
