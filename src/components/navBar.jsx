import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import profile from "../assets/profile.png";
import textBackground from "../assets/swirlBackground2.png";

const Wrapper = styled.section`
  color: blue;
  display: grid;
  place-items: center;
`;

const Container = styled.section`
  margin-top: 20px;
  display: flex;
  place-items: center;
`;

const ProfileImage = styled.img`
  width: 104px;
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
      <Container>
        <Link to="/">
          <ProfileImage src={profile} alt="Isaac Image" />
        </Link>
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
      </Container>
    </Wrapper>
  );
}
