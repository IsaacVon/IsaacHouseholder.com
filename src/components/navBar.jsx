import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import profile from "../assets/profile.png";
import textBackground from "../assets/swirlBackground2.png";
import line from "../assets/lines/line.png";
import line2 from "../assets/lines/line2.png";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 20px;
`;

const LeftContainer = styled.section`
  display: flex;
  /* width: 45vw; */
  justify-content: flex-end;
  /* background-color: green; */
  flex-wrap: wrap;
`;

const CenterContainer = styled.section`
  /* background-color: darkgreen; */
`;

const RightContainer = styled.section`
  /* background-color: lightcoral; */
  display: flex;
  /* width: 45vw; */
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ProfileImage = styled.img`
  width: 104px;
`;

const LineTop = styled.img`
  width: 100%;
  max-width: 425px;
  /* min-width: 300px; */
  height: 1px;
  /* position: relative; */
  top: 3px;
  left: 10px;
`;

const LineBottom = styled.img`
  width: 100%;
  max-width: 425px;
  /* min-width: 300px; */
  height: 1px;
  /* position: relative; */
  bottom: 10px;
  left: 10px;
`;

const Button = styled.button`
  flex-shrink: 1;
  width: 150px;
  color: #2c2d52;
  background-color: white;
  font-size: 15px;
  margin: 1em 0px;
  border: 0px;
  border-radius: 30px;
`;

const LeftWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const RightWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export default function NavBar() {
  return (
    <Wrapper>
      <LeftWrapper>
        <LineTop src={line2} alt="line" />

        <LeftContainer>
          <Button currentPage={false}>
            <Link to="/portfolio">Portfolio</Link>
          </Button>
          <Button currentPage={false}>
            <Link to="/experience">Experience</Link>
          </Button>
          <Button currentPage={false}>
            <Link to="/recommendations">Recommendations</Link>
          </Button>
        </LeftContainer>
        <LineBottom src={line} alt="line" />
      </LeftWrapper>

      <CenterContainer>
        <Link to="/">
          <ProfileImage src={profile} alt="Isaac Image" />
        </Link>
      </CenterContainer>

      <RightWrapper>
        <LineTop src={line2} alt="line" />
        <RightContainer>
          <Button currentPage={false}>
            <Link to="/education">Education</Link>
          </Button>
          <Button currentPage={false}>
            <Link to="/skills">Skills</Link>
          </Button>
          <Button currentPage={false}>
            <Link to="/hobbies">Hobbies</Link>
          </Button>
        </RightContainer>
        <LineBottom src={line} alt="line" />
      </RightWrapper>
    </Wrapper>
  );
}
