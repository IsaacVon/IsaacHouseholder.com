import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import swirlBackground from "../assets/swirlBackground3.png";
import profile from "../assets/profile.png";
import burgerSolid from "../assets/buttons/burgerSolid.png";
import line from "../assets/lines/line.png";
import line2 from "../assets/lines/line2.png";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 88px 20px 20px 20px;
`;

const NavDrawer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const BurgerContainer = styled.section`
  /* background-color: darkgreen; */
  position: absolute;
  right: 36px;
  top: 115px;
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

const Burger = styled.img`
  width: 55px;
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

const LineBottomNav = styled.img`
  margin-top: 20px;
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
  font-family: "comfortaa";

  &:hover {
    transition: background-color 0.2s ease-in-out;
    color: #1deff4;

    background: url(${swirlBackground});
    background-size: 46px;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;

    /* background-color: #f89143; */
  }

  &:focus {
    outline-width: 0px;
  }
`;

const LeftWrapper = styled.section`
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const RightWrapper = styled.section`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export default function NavBar() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [navExpanded, setnavExpanded] = useState(false);

  const mobileNavWidth = 800;

  const toggleNavDropdown = () => {
    const newNavPosition = navExpanded ? false : true;
    setnavExpanded(newNavPosition);
  };

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderNavDropdown = () => {
    if (navExpanded)
      return (
        <NavDrawer>
          <Button currentPage={false}>
            <Link to="/portfolio">Portfolio</Link>
          </Button>
          <Button currentPage={false}>
            <Link to="/experience">Experience</Link>
          </Button>

          <Button currentPage={false}>
            <Link to="/skills">Skills</Link>
          </Button>
          <Button currentPage={false}>
            <Link to="/education">Education</Link>
          </Button>
          <Button currentPage={false}>
            <Link to="/recommendations">Recommendations</Link>
          </Button>
          <Button currentPage={false}>
            <Link to="/hobbies">Hobbies</Link>
          </Button>
          <LineBottomNav src={line} alt="line" />
        </NavDrawer>
      );
  };

  if (windowWidth < mobileNavWidth)
    return (
      <>
        <Wrapper>
          <CenterContainer>
            <Link to="/">
              <ProfileImage src={profile} alt="Isaac Image" />
            </Link>
          </CenterContainer>
        </Wrapper>
        <BurgerContainer>
          <Burger
            onClick={toggleNavDropdown}
            src={burgerSolid}
            alt="Burger Icon"
          />
        </BurgerContainer>
        {renderNavDropdown()}
      </>
    );

  if (windowWidth > mobileNavWidth)
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
              <Link to="/skills">Skills</Link>
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
              <Link to="/recommendations">Recommendations</Link>
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
