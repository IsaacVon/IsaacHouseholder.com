import React from "react";
import styled from "styled-components";
import textBackground from "../assets/swirlBackground2.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding-bottom: 200px;
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

const SchoolName = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 15px;
  margin-bottom: 0px;
  color: #2c2d52;
`;

const DegreeType = styled.h3`
  font-weight: 300;
  font-size: 12px;
  line-height: 13px;
  margin-top: 10px;
`;

const ProjectDescription = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 50px;
  max-width: 488px;
  font-weight: 300;
  font-size: 12px;
  line-height: 19px;
  text-align: justify;
  margin: 0px 56px 40px 56px;
`;

export default function Education() {
  return (
    <Wrapper>
      <Section>Education</Section>
      <SchoolName>Coding Boot Camp</SchoolName>
      <DegreeType>University of California Irvine 2020</DegreeType>
      <SchoolName>Bachelor of Science in Mechanical Engineering</SchoolName>
      <DegreeType>California Baptist University 2012-2016</DegreeType>

      <ProjectDescription>
        With my friend/classmate, we started the Formula SAE program at our
        university. We pitched the idea to the president of the school and
        obtained funding. We worked with several teachers and had all jr design
        projects assigned to a different vehicle section. The team raced one
        year after I graduated.{" "}
      </ProjectDescription>
    </Wrapper>
  );
}
