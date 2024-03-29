import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../utils/device';

import burgerSolid from '../assets/buttons/burgerSolid.png';
import colors from '../config/colors';
import line from '../assets/lines/line.png';
import line2 from '../assets/lines/line2.png';
import profile from '../assets/profile.jpeg';

const Wrapper = styled.section`
  position: relative; /* Add this */
  display: flex;
  justify-content: center; /* Change to center */
  align-items: center;
  margin: 70px 20px 20px 20px;

  @media ${device.mobileL} {
    margin: 88px 20px 20px 20px;
  }
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
  position: absolute; /* Bring this back */
  right: -7px;
  padding-right: 7px; /* Add padding-right */

  top: 50%; /* Center vertically */
  transform: translateY(-50%); /* Adjust for exact centering */

  &:hover {
    cursor: pointer;
  }
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
  height: 104px;
  border-radius: 5px;
  @media ${device.mobileS} {
    width: 70px;
    height: 70px;
  }
  @media ${device.tablet} {
    width: 80px;
    height: 80px;
  }
`;

const Burger = styled.img`
  width: 55px;
  height: 55px;
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
  height: 1px;
  bottom: 10px;
  left: 10px;
`;

const LineBottomNav = styled.img`
  margin-top: 20px;
  width: 100%;
  max-width: 425px;
  height: 1px;
  bottom: 10px;
  left: 10px;
`;

const Button = styled.button`
  flex-shrink: 1;
  width: 150px;
  color: ${colors.black};
  background-color: white;
  font-size: 15px;
  margin: 1em 0px;
  border: 0px;
  border-radius: 30px;
  font-family: 'Aktiv Grotesk', sans-serif;

  &:hover {
    transition: background-color 0.2s ease-in-out;
    color: ${colors.primary};

    background-size: 46px;
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

export default function NavBar({ expandNav, toggleNav }) {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const mobileNavWidth = 1100;

  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderNavDropdown = () => {
    if (expandNav)
      return (
        <NavDrawer>
          <Button>
            <Link to='/portfolio' onClick={toggleNav}>
              Portfolio
            </Link>
          </Button>
          <Button>
            <Link to='/experience' onClick={toggleNav}>
              Experience
            </Link>
          </Button>

          <Button>
            <Link to='/skills' onClick={toggleNav}>
              Skills
            </Link>
          </Button>
          <Button>
            <Link to='/education' onClick={toggleNav}>
              Education
            </Link>
          </Button>
          <Button>
            <Link to='/recommendations' onClick={toggleNav}>
              Recommendations
            </Link>
          </Button>
          <Button>
            <Link to='/hobbies' onClick={toggleNav}>
              Hobbies
            </Link>
          </Button>
          <LineBottomNav src={line} alt='line' />
        </NavDrawer>
      );
  };

  if (windowWidth < mobileNavWidth)
    return (
      <>
        <Wrapper>
          <CenterContainer>
            <Link to='/'>
              <ProfileImage src={profile} alt='Isaac Image' />
            </Link>
          </CenterContainer>
          <BurgerContainer>
            <Burger onClick={toggleNav} src={burgerSolid} alt='Burger Icon' />
          </BurgerContainer>
        </Wrapper>
        {renderNavDropdown()}
      </>
    );

  if (windowWidth > mobileNavWidth)
    return (
      <Wrapper>
        <LeftWrapper>
          <LineTop src={line2} alt='line' />

          <LeftContainer>
            <Button>
              <Link to='/portfolio'>Portfolio</Link>
            </Button>
            <Button>
              <Link to='/experience'>Experience</Link>
            </Button>

            <Button>
              <Link to='/skills'>Skills</Link>
            </Button>
          </LeftContainer>
          <LineBottom src={line} alt='line' />
        </LeftWrapper>

        <CenterContainer>
          <Link to='/'>
            <ProfileImage src={profile} alt='Isaac Image' />
          </Link>
        </CenterContainer>

        <RightWrapper>
          <LineTop src={line2} alt='line' />
          <RightContainer>
            <Button>
              <Link to='/education'>Education</Link>
            </Button>
            <Button>
              <Link to='/recommendations'>Recommendations</Link>
            </Button>
            <Button>
              <Link to='/hobbies'>Hobbies</Link>
            </Button>
          </RightContainer>
          <LineBottom src={line} alt='line' />
        </RightWrapper>
      </Wrapper>
    );
}
