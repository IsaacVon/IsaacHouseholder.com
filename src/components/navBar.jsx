import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import profile from "../assets/profile.png";
import textBackground from "../assets/swirlBackground2.png";
import line from "../assets/lines/line.png";
import line2 from "../assets/lines/line2.png";

const Wrapper = styled.section`
  color: blue;
  display: grid;
  place-items: center;
`;

const LineContainer = styled.section`
  /* display: flex;
  place-items: center; */
`;

const ButtonContainer = styled.section``;

const ProfileImage = styled.img`
  width: 104px;
`;

const LineTop = styled.img`
  width: 1000px;
  position: relative;
  top: 3px;
  left: 10px;
`;

const LineBottom = styled.img`
  width: 1000px;
  position: relative;
  bottom: 10px;
  left: 10px;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */

  /* background: ${(props) => (props.currentPage ? "palevioletred" : "white")};

  color: ${(props) => (props.currentPage ? "white" : "palevioletred")}; */
  /* background: url(${textBackground});
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text; */

  color: #2c2d52;
  background-color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 0px;
  border-radius: 10px;
`;

export default function NavBar() {
  return (
    <Wrapper>
      <Link to="/">
        <ProfileImage src={profile} alt="Isaac Image" />
      </Link>

      <LineContainer>
        <LineTop src={line2} alt="line" />
        <ButtonContainer>
          <Button currentPage={false}>
            <Link to="/portfolio">Portfolio</Link>
          </Button>
          <Button currentPage={false}>
            <Link to="/experience">Experience</Link>
          </Button>
          <Button currentPage={false}>
            <Link to="/recommendations">Recommendations</Link>
          </Button>
          <Button currentPage={false}>
            <Link to="/educationskills"> Education and Skills</Link>
          </Button>
          <Button currentPage={false}>
            <Link to="/hobbies">Hobbies</Link>
          </Button>
        </ButtonContainer>
        <LineBottom src={line} alt="line" />
      </LineContainer>
    </Wrapper>
  );
}
