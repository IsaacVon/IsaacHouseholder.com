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
  margin-bottom: 17px;
`;

const HobbyList= styled.ul`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 30px;
  text-align: left;
  list-style-type: none;
  padding-inline-start: 0px;
`;
export default function Hobbies() {
  return (
    <Wrapper>
      <Section>Hobbies</Section>
      <HobbyList>
        <li>Hiking with family</li>
        <li>Computers</li>
        <li>Motorcycles</li>
        <li>Learning</li>
        <li>Eating</li>
      </HobbyList>
    </Wrapper>
  );
}
