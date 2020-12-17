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



const HobbyName = styled.li`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 30px;
  text-align: left;
  list-style-type: none;
`;
export default function Hobbies() {
  return (
    <Wrapper>
      <Section>Hobbies</Section>
      <HobbyName>Hiking with family</HobbyName>
      <HobbyName>Computers</HobbyName>
      <HobbyName>Motorcycles</HobbyName>
      <HobbyName>Learning</HobbyName>
      <HobbyName>Eating</HobbyName>
    </Wrapper>
  );
}
